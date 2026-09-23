import Link from "next/link";
import { createClient } from '@/utils/supabase/server'
import { formatDate } from '@/utils/date'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: article } = await supabase
    .from('articles')
    .select('title, seo_title, seo_description')
    .eq('slug', params.slug)
    .single()

  if (!article) return { title: 'Artikel Tidak Ditemukan' }

  return {
    title: `${article.seo_title || article.title} - Al Farizki & Zhafir`,
    description: article.seo_description,
  }
}

export default async function SingleArticlePage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!article) {
    notFound()
  }

  // We redirect unpublished articles if user is not admin
  if (article.status !== 'published') {
    const { data: { user } } = await supabase.auth.getUser()
    const isUserAdmin = !!user
    if (!isUserAdmin) {
      notFound()
    }
  }

  return (
    <div style={{width: "100%", minHeight: "100vh", background: "var(--paper)", display: "flex", flexDirection: "column"}}>
      <div style={{width: "100%", background: "#FFFFFF", borderBottom: "1px solid var(--line)"}}>
        <div className="wrap" style={{maxWidth: "1180px", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Link href="/" aria-label="Beranda" style={{display: "flex", alignItems: "center"}}>
            <img src="/images/logo.png" alt="Logo" style={{ height: "64px", width: "auto" }} />
          </Link>
          <Link href="/berita" style={{fontSize: "13.5px", fontWeight: "600", color: "var(--navy-900)", textDecoration: "none"}}>
            Kembali ke Daftar Berita
          </Link>
        </div>
      </div>

      <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px 100px", width: "100%"}}>
        <div style={{marginBottom: "30px", textAlign: "center"}}>
          <span style={{fontSize: "11.5px", letterSpacing: "1.5px", color: "#B08D4F", fontWeight: "700", textTransform: "uppercase", display: "inline-block", marginBottom: "16px"}}>{article.category}</span>
          <h1 style={{fontSize: "42px", color: "var(--navy-950)", fontWeight: "800", margin: "0 0 24px", lineHeight: "1.25"}}>{article.title}</h1>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", fontSize: "14px", color: "var(--ink-soft)"}}>
            <span>Oleh <strong style={{color: "var(--navy-900)"}}>{article.author}</strong></span>
            <span>·</span>
            <span>{formatDate(article.created_at)}</span>
          </div>
        </div>

        {article.cover_url && (
          <div style={{width: "100%", height: "400px", borderRadius: "4px", overflow: "hidden", marginBottom: "40px", boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)"}}>
            <img src={article.cover_url} alt={`Sampul ${article.title}`} style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
        )}

        <article className="prose-artikel" style={{fontSize: "17px", lineHeight: "1.8", color: "var(--ink)"}}>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </div>
  )
}
