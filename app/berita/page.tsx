import Link from "next/link";
import { createClient } from '@/utils/supabase/server'
import { formatDate } from '@/utils/date'

export const metadata = {
  title: 'Berita & Opini Hukum - Al Farizki & Zhafir Law Firm',
  description: 'Wawasan, opini hukum, berita kantor, dan pembaruan regulasi dari tim hukum Al Farizki & Zhafir Law Firm.',
}

export default async function BeritaPage() {
  const supabase = await createClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  return (
    <div style={{width: "100%", minHeight: "100vh", background: "var(--paper-alt)", display: "flex", flexDirection: "column"}}>
      <div style={{width: "100%", background: "#FFFFFF", borderBottom: "1px solid var(--line)"}}>
        <div className="wrap" style={{maxWidth: "1180px", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Link href="/" aria-label="Beranda" style={{display: "flex", alignItems: "center"}}>
            <img src="/images/logo.png" alt="Logo" style={{ height: "64px", width: "auto" }} />
          </Link>
          <Link href="/" style={{fontSize: "13.5px", fontWeight: "600", color: "var(--navy-900)", textDecoration: "none"}}>
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      <div className="wrap" style={{maxWidth: "1180px", margin: "0 auto", padding: "80px 40px 100px", flex: 1}}>
        <div style={{marginBottom: "40px", textAlign: "center"}}>
          <span style={{fontSize: "12.5px", letterSpacing: "2.5px", color: "#B08D4F", fontWeight: "700", textTransform: "uppercase"}}>Berita &amp; Opini Hukum</span>
          <h1 style={{fontSize: "36px", color: "var(--navy-950)", fontWeight: "800", margin: "14px 0 0"}}>Arsip Wawasan Kami</h1>
        </div>

        {articles && articles.length > 0 ? (
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px"}}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {articles.map((article: any) => (
              <Link href={`/berita/${article.slug}`} key={article.id} style={{textDecoration: "none", color: "inherit"}}>
                <div className="card-lift" style={{background: "#FFFFFF", border: "1px solid var(--line)", display: "flex", flexDirection: "column", height: "100%"}}>
                  <div style={{height: "200px", background: article.cover_url ? `url(${article.cover_url}) center/cover no-repeat` : "var(--navy-900)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden"}}>
                    {!article.cover_url && (
                      <span style={{fontSize: "12px", color: "rgba(255,255,255,0.65)", letterSpacing: "1px", textTransform: "uppercase"}}>{article.category}</span>
                    )}
                  </div>
                  <div style={{padding: "24px", display: "flex", flexDirection: "column", flex: 1}}>
                    <span style={{fontSize: "10.5px", letterSpacing: "1px", color: "#B08D4F", textTransform: "uppercase", fontWeight: "700", marginBottom: "8px", display: "block"}}>{article.category}</span>
                    <h2 style={{fontSize: "18px", color: "var(--navy-950)", fontWeight: "700", marginBottom: "12px", lineHeight: "1.4"}}>{article.title}</h2>
                    <p style={{fontSize: "13.5px", lineHeight: "1.6", color: "var(--ink-soft)", marginBottom: "20px", flex: 1}}>
                      {article.seo_description || (article.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...')}
                    </p>
                    <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "11.5px", color: "#98A2AE"}}>
                      <span>{article.author}</span>
                      <span>·</span>
                      <span>{formatDate(article.created_at)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{textAlign: "center", padding: "60px 0"}}>
            <p style={{fontSize: "16px", color: "var(--ink-soft)"}}>Belum ada artikel yang diterbitkan.</p>
          </div>
        )}
      </div>
    </div>
  )
}
