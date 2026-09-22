'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function signOutAdmin() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

export async function deleteArticle(id: string) {
  const supabase = await createClient()
  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) throw new Error("Unauthorized")

  const { error } = await supabase.from('articles').delete().eq('id', id)
  if (error) throw error
  
  revalidatePath('/admin')
  revalidatePath('/berita')
  revalidatePath('/')
}

export async function saveArticle(formData: FormData) {
  const supabase = await createClient()
  const { data: isAdmin } = await supabase.rpc('is_admin')
  if (!isAdmin) throw new Error("Unauthorized")

  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const author = formData.get('author') as string
  const content = formData.get('content') as string
  const seo_title = formData.get('seo_title') as string
  const seo_desc = formData.get('seo_desc') as string
  let slug = formData.get('slug') as string
  const status = formData.get('status') as string
  const image = formData.get('image') as File | null

  // basic slugification if empty
  if (!slug) {
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  } else {
    // remove /berita/ if they typed it
    slug = slug.replace(/^\/berita\//, '')
  }

  let cover_url = null
  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    
    // We upload to 'sampul-berita' bucket.
    const { error: uploadError } = await supabase.storage.from('sampul-berita').upload(fileName, image)
    if (uploadError) {
      console.error("Gagal mengunggah gambar.", uploadError)
    } else {
      const { data: publicUrlData } = supabase.storage.from('sampul-berita').getPublicUrl(fileName)
      cover_url = publicUrlData.publicUrl
    }
  }

  const { error } = await supabase.from('articles').insert({
    title,
    category,
    author,
    content,
    seo_title,
    seo_description: seo_desc,
    slug,
    status,
    cover_url
  })

  if (error) throw error

  revalidatePath('/admin')
  revalidatePath('/berita')
  revalidatePath('/')
  redirect('/admin')
}
