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

  let image_url = null
  if (image && image.size > 0) {
    const fileExt = image.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    
    // We upload to 'images' bucket. Make sure the user has created it in Supabase!
    const { error: uploadError } = await supabase.storage.from('images').upload(fileName, image)
    if (uploadError) {
      console.error("Gagal mengunggah gambar. Pastikan bucket 'images' sudah dibuat dan public di Supabase.", uploadError)
    } else {
      const { data: publicUrlData } = supabase.storage.from('images').getPublicUrl(fileName)
      image_url = publicUrlData.publicUrl
    }
  }

  const { error } = await supabase.from('articles').insert({
    title,
    category,
    author,
    content,
    seo_title,
    seo_desc,
    slug,
    status,
    image_url
  })

  if (error) throw error

  revalidatePath('/admin')
  revalidatePath('/berita')
  revalidatePath('/')
  redirect('/admin')
}
