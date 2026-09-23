import { createClient } from '@/utils/supabase/server'
import { notFound, redirect } from 'next/navigation'
import ArticleForm from '../../components/ArticleForm'

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/admin/login')
  }

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!article) {
    notFound()
  }

  return <ArticleForm initialData={article} articleId={article.id} />
}
