import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import AdminBar from './components/AdminBar'
import DeleteButton from './components/DeleteButton'
import { deleteArticle } from './actions'
import { redirect } from 'next/navigation'

export default async function AdminDashboard({ searchParams }: { searchParams: { filter?: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return redirect('/admin/login')
  
  const filter = searchParams.filter || 'semua'

  // Fetch stats
  const { count: totalCount } = await supabase.from('articles').select('*', { count: 'exact', head: true })
  const { count: publishedCount } = await supabase.from('articles').select('*', { count: 'exact', head: true }).eq('status', 'published')
  const { count: draftCount } = await supabase.from('articles').select('*', { count: 'exact', head: true }).eq('status', 'draft')

  // Fetch articles
  let query = supabase.from('articles').select('*').order('created_at', { ascending: false })
  if (filter === 'terbit') query = query.eq('status', 'published')
  if (filter === 'draf') query = query.eq('status', 'draft')

  const { data: articles } = await query

  return (
    <div style={{width: "100%", minHeight: "100vh", background: "var(--paper)", display: "flex", flexDirection: "column"}}>
      <AdminBar />
      <div className="konten flex-1 w-full max-w-[1440px] mx-auto p-5 md:py-[38px] md:px-[48px]">
        <div className="kepala flex flex-col md:flex-row md:items-end justify-between mb-[30px] gap-5">
          <div style={{minWidth: 0}}>
            <div className="remah" style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--ink-soft)", marginBottom: "10px"}}>
              <span>Dashboard</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"></path></svg>
              <span style={{color: "var(--navy-900)", fontWeight: 600}}>Berita &amp; Opini</span>
            </div>
            <h1 style={{fontSize: "32px", color: "var(--navy-950)", fontWeight: 700}}>Kelola Berita <span className="amp">&amp;</span> Opini</h1>
          </div>
          <Link href="/admin/berita/baru" className="btn-tulis" style={{display: "flex", alignItems: "center", gap: "9px", background: "#B08D4F", color: "var(--navy-950)", fontSize: "14px", fontWeight: 700, padding: "14px 26px", letterSpacing: "0.3px", flex: "0 0 auto"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14"></path></svg>
            Tulis Berita Baru
          </Link>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px"}}>
          <span style={{fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 600}}>Ringkasan</span>
        </div>
        <div className="statgrid grid grid-cols-2 md:grid-cols-4 gap-5 mb-[38px]">
          <div style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "22px 24px"}}>
            <div style={{fontFamily: "'Playfair Display',serif", fontSize: "32px", fontWeight: 700, color: "var(--navy-950)"}}>{totalCount || 0}</div>
            <div style={{fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px"}}>Total artikel</div>
          </div>
          <div style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "22px 24px"}}>
            <div style={{fontFamily: "'Playfair Display',serif", fontSize: "32px", fontWeight: 700, color: "#2E7D5B"}}>{publishedCount || 0}</div>
            <div style={{fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px"}}>Terbit</div>
          </div>
          <div style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "22px 24px"}}>
            <div style={{fontFamily: "'Playfair Display',serif", fontSize: "32px", fontWeight: 700, color: "#B08D4F"}}>{draftCount || 0}</div>
            <div style={{fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px"}}>Draf belum terbit</div>
          </div>
          <div style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "22px 24px"}}>
            <div style={{fontFamily: "'Playfair Display',serif", fontSize: "32px", fontWeight: 700, color: "var(--navy-950)"}}>—</div>
            <div style={{fontSize: "12.5px", color: "var(--ink-soft)", marginTop: "4px"}}>Pembaca 30 hari terakhir</div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white border border-line">
          <div className="min-w-[800px]">
          <div className="tbl-atas" style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 26px", borderBottom: "1px solid var(--line)", gap: "12px"}}>
            <h2 style={{fontSize: "17px", color: "var(--navy-950)", fontWeight: 700}}>Daftar Artikel</h2>
            <div style={{display: "flex", gap: "10px"}}>
              <Link href="/admin" scroll={false} style={{fontSize: "12px", fontWeight: 600, padding: "7px 14px", background: filter === 'semua' ? "#173B6C" : "transparent", color: filter === 'semua' ? "#FFFFFF" : "var(--navy-900)", border: filter === 'semua' ? "none" : "1px solid var(--line)"}}>Semua</Link>
              <Link href="/admin?filter=terbit" scroll={false} style={{fontSize: "12px", fontWeight: 600, padding: "7px 14px", background: filter === 'terbit' ? "#173B6C" : "transparent", color: filter === 'terbit' ? "#FFFFFF" : "var(--navy-900)", border: filter === 'terbit' ? "none" : "1px solid var(--line)"}}>Terbit</Link>
              <Link href="/admin?filter=draf" scroll={false} style={{fontSize: "12px", fontWeight: 600, padding: "7px 14px", background: filter === 'draf' ? "#173B6C" : "transparent", color: filter === 'draf' ? "#FFFFFF" : "var(--navy-900)", border: filter === 'draf' ? "none" : "1px solid var(--line)"}}>Draf</Link>
            </div>
          </div>

          <div className="tbl-row" style={{display: "grid", gridTemplateColumns: "2.6fr 1fr 1fr 0.9fr 1fr", gap: "16px", padding: "14px 26px", background: "#FBFAF6", borderBottom: "1px solid var(--line)"}}>
            <span style={{fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 700}}>Judul</span>
            <span style={{fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 700}}>Kategori</span>
            <span style={{fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 700}}>Penulis</span>
            <span style={{fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 700}}>Status</span>
            <span style={{fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 700, textAlign: "right"}}>Aksi</span>
          </div>

          {articles && articles.length > 0 ? (
            articles.map((article) => (
              <div key={article.id} className="row-hover tbl-row" style={{display: "grid", gridTemplateColumns: "2.6fr 1fr 1fr 0.9fr 1fr", gap: "16px", padding: "18px 26px", borderBottom: "1px solid var(--line)", alignItems: "center"}}>
                <div style={{minWidth: 0}}>
                  <div className="judul" style={{fontSize: "14px", color: "var(--navy-950)", fontWeight: 600, lineHeight: 1.4}}>{article.title}</div>
                  <div className="slug" style={{fontSize: "11.5px", color: "#98A2AE", marginTop: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>/berita/{article.slug}</div>
                </div>
                <span style={{fontSize: "12.5px", color: "var(--ink-soft)"}}>{article.category}</span>
                <span style={{fontSize: "12.5px", color: "var(--ink-soft)"}}>{article.author}</span>
                <span className="status" style={{fontSize: "11.5px", fontWeight: 700, padding: "5px 11px", borderRadius: "12px", justifySelf: "start", background: article.status === 'published' ? "#E3F1EA" : "#F6EEDD", color: article.status === 'published' ? "#2E7D5B" : "#8A6A2F"}}>
                  {article.status === 'published' ? 'Terbit' : 'Draf'}
                </span>
                <div className="aksi" style={{display: "flex", gap: "8px", justifyContent: "flex-end"}}>
                  <Link href={`/admin/berita/${article.id}`} aria-label="Edit artikel" style={{width: "32px", height: "32px", border: "1px solid var(--line)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy-800)" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                  </Link>
                  <Link href={`/berita/${article.slug}`} target="_blank" aria-label="Lihat artikel" style={{width: "32px", height: "32px", border: "1px solid var(--line)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy-800)" strokeWidth="2"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </Link>
                  <form action={deleteArticle.bind(null, article.id)}>
                    <DeleteButton />
                  </form>
                </div>
              </div>
            ))
          ) : (
            <div style={{padding: "40px", textAlign: "center", color: "var(--ink-soft)", fontSize: "14px"}}>
              Belum ada artikel.
            </div>
          )}

          {articles && articles.length > 0 && (
            <div className="pager" style={{padding: "16px 26px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <span style={{fontSize: "12.5px", color: "var(--ink-soft)"}}>Menampilkan {articles.length} artikel</span>
            </div>
          )}
          </div>
        </div>

      </div>
    </div>
  )
}
