'use client'

import { useState, useEffect } from 'react'
import AdminBar from '../../components/AdminBar'
import TiptapEditor from '../../components/TiptapEditor'
import { saveArticle } from '../../actions'

export default function NewArticle() {
  const [title, setTitle] = useState('Karyawan Di-PHK Sepihak: Langkah Hukum yang Bisa Diambil')
  const [seoTitle, setSeoTitle] = useState('PHK Sepihak: Langkah Hukum Pekerja')
  const [seoDesc, setSeoDesc] = useState('Panduan praktis dari Al Farizki & Zhafir Law Firm untuk pekerja yang mengalami PHK sepihak: bukti yang perlu disiapkan hingga langkah hukumnya.')
  const [slug, setSlug] = useState('/berita/phk-sepihak-langkah-hukum')
  const [content, setContent] = useState('<p>PHK sepihak adalah pemutusan hubungan kerja yang dilakukan tanpa memenuhi prosedur yang diatur undang-undang. Dalam praktiknya, pekerja sering menerima pemberitahuan mendadak tanpa penjelasan alasan yang sah.</p><p>Artikel ini membahas apa yang bisa dilakukan pekerja, mulai dari mencatat bukti, mengajukan perundingan bipartit, hingga langkah ke pengadilan hubungan industrial apabila perundingan gagal.</p>')
  const [status, setStatus] = useState('draft') // 'draft' or 'published'
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  // auto slug
  useEffect(() => {
    if (!slug || slug.startsWith('/berita/phk')) {
      const generated = '/berita/' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      setSlug(generated)
    }
  }, [title]) // eslint-disable-line

  return (
    <div style={{width: "100%", minHeight: "100vh", background: "var(--paper)", display: "flex", flexDirection: "column"}}>
      <AdminBar showBackToDashboard />
      
      <form action={saveArticle} className="badan" style={{flex: 1, width: "100%", maxWidth: "1440px", margin: "0 auto", padding: "34px 48px", display: "flex", gap: "30px"}}>
        <input type="hidden" name="content" value={content} />
        <input type="hidden" name="status" value={status} />
        
        <div className="editor" style={{flex: 1, display: "flex", flexDirection: "column", gap: "20px", minWidth: 0}}>
          <div>
            <h1 style={{fontSize: "28px", color: "var(--navy-950)", fontWeight: 700, marginBottom: "6px"}}>Tulis Berita / Opini Baru</h1>
            <p style={{fontSize: "13.5px", color: "var(--ink-soft)"}}>Artikel yang diterbitkan langsung muncul di halaman Berita website, tanpa mengubah kode.</p>
          </div>

          <div className="kartu" style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "26px 28px"}}>
            <label htmlFor="title" style={{display: "block", fontSize: "12px", fontWeight: 700, color: "var(--navy-900)", marginBottom: "8px", letterSpacing: "0.5px", textTransform: "uppercase"}}>Judul Artikel</label>
            <input id="title" name="title" type="text" value={title} onChange={e => setTitle(e.target.value)} required style={{width: "100%", height: "52px", padding: "0 16px", fontSize: "17px", fontWeight: 600, color: "var(--navy-950)", border: "1px solid var(--line)", background: "#FFFFFF"}} />

            <div className="dua-kolom" style={{display: "flex", gap: "18px", marginTop: "20px"}}>
              <div style={{flex: 1, minWidth: 0}}>
                <label htmlFor="category" style={{display: "block", fontSize: "12px", fontWeight: 700, color: "var(--navy-900)", marginBottom: "8px", letterSpacing: "0.5px", textTransform: "uppercase"}}>Kategori</label>
                <select id="category" name="category" style={{width: "100%", height: "44px", padding: "0 12px", fontSize: "14px", border: "1px solid var(--line)", background: "#FFFFFF", color: "var(--ink)"}}>
                  <option>Opini Hukum</option>
                  <option>Berita Kantor</option>
                  <option>Legal Update</option>
                </select>
              </div>
              <div style={{flex: 1, minWidth: 0}}>
                <label htmlFor="author" style={{display: "block", fontSize: "12px", fontWeight: 700, color: "var(--navy-900)", marginBottom: "8px", letterSpacing: "0.5px", textTransform: "uppercase"}}>Penulis</label>
                <select id="author" name="author" style={{width: "100%", height: "44px", padding: "0 12px", fontSize: "14px", border: "1px solid var(--line)", background: "#FFFFFF", color: "var(--ink)"}}>
                  <option>Gilang Al Farizki Harman, S.H.</option>
                  <option>Zhafir Galang Arissaputra, S.H.</option>
                  <option>Arimbi Gita Pramudya Wardani, S.H.</option>
                  <option>Bayu Nando Prayoga, S.H.</option>
                </select>
              </div>
            </div>
          </div>

          <div className="kartu" style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "26px 28px"}}>
            <span style={{display: "block", fontSize: "12px", fontWeight: 700, color: "var(--navy-900)", marginBottom: "10px", letterSpacing: "0.5px", textTransform: "uppercase"}}>Gambar Sampul</span>
            
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                setImagePreview(URL.createObjectURL(file))
              } else {
                setImagePreview(null)
              }
            }} style={{display: 'none'}} />
            
            <label htmlFor="image" className="unggah" style={{border: "1.5px dashed #C7BFA9", padding: "26px", display: "flex", alignItems: "center", gap: "18px", cursor: "pointer", position: "relative", overflow: "hidden", background: imagePreview ? '#000' : 'transparent', minHeight: "130px"}}>
              {imagePreview ? (
                <>
                  <img src={imagePreview} alt="Preview" style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8}} />
                  <span style={{position: 'relative', zIndex: 1, color: '#FFFFFF', fontSize: '13px', fontWeight: 600, background: 'rgba(0,0,0,0.5)', padding: '6px 12px', borderRadius: '4px'}}>Ubah Gambar</span>
                </>
              ) : (
                <>
                  <span style={{width: "52px", height: "52px", background: "var(--navy-100)", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-700)" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-5-5L5 21"></path></svg>
                  </span>
                  <div style={{flex: 1}}>
                    <div style={{fontSize: "13.5px", color: "var(--navy-900)", fontWeight: 600}}>Klik untuk mengunggah gambar dari komputer</div>
                    <div style={{fontSize: "12px", color: "var(--ink-soft)", marginTop: "3px"}}>JPG atau PNG, disarankan 1200 &times; 630 piksel</div>
                  </div>
                  <span style={{fontSize: "13px", fontWeight: 600, padding: "11px 20px", border: "1px solid #173B6C", background: "#FFFFFF", color: "#173B6C"}}>Pilih File</span>
                </>
              )}
            </label>
          </div>

          <TiptapEditor content={content} onChange={setContent} />
        </div>

        <div className="samping" style={{width: "380px", flex: "0 0 380px", display: "flex", flexDirection: "column", gap: "20px"}}>
          <div style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "22px 24px"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px"}}>
              <span style={{fontSize: "12px", fontWeight: 700, color: "var(--navy-900)", letterSpacing: "0.5px", textTransform: "uppercase"}}>Status</span>
              <span style={{fontSize: "11.5px", fontWeight: 700, padding: "5px 11px", borderRadius: "12px", background: "#F6EEDD", color: "#8A6A2F"}}>Draf</span>
            </div>
            <div style={{display: "flex", gap: "10px"}}>
              <button type="submit" onClick={() => setStatus('draft')} style={{flex: 1, height: "44px", border: "1px solid #173B6C", background: "#FFFFFF", color: "#173B6C", fontSize: "13.5px", fontWeight: 600, cursor: "pointer"}}>Simpan Draf</button>
              <button type="submit" onClick={() => setStatus('published')} style={{flex: 1, height: "44px", border: "none", background: "#B08D4F", color: "var(--navy-950)", fontSize: "13.5px", fontWeight: 700, cursor: "pointer"}}>Terbitkan</button>
            </div>
            <p style={{fontSize: "12px", color: "var(--ink-soft)", margin: "14px 0 0", lineHeight: 1.6}}>Setelah diterbitkan, artikel langsung tampil di halaman Berita dan bisa ditemukan mesin pencari.</p>
          </div>

          <div style={{background: "#FFFFFF", border: "1px solid var(--line)", padding: "22px 24px"}}>
            <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px"}}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B08D4F" strokeWidth="2"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
              <span style={{fontSize: "12px", fontWeight: 700, color: "var(--navy-900)", letterSpacing: "0.5px", textTransform: "uppercase"}}>Pengaturan Pencarian</span>
            </div>
            <p style={{fontSize: "12px", color: "var(--ink-soft)", lineHeight: 1.6, margin: "0 0 18px"}}>Bagian ini yang menentukan tampilan artikel saat muncul di hasil pencarian.</p>

            <label htmlFor="seo_title" style={{display: "block", fontSize: "12px", fontWeight: 600, color: "var(--navy-900)", marginBottom: "7px"}}>Judul untuk mesin pencari</label>
            <input id="seo_title" name="seo_title" type="text" value={seoTitle} onChange={e => setSeoTitle(e.target.value)} style={{width: "100%", height: "42px", padding: "0 12px", fontSize: "13.5px", border: "1px solid var(--line)", background: "#FFFFFF", color: "var(--ink)"}} />
            <div style={{display: "flex", justifyContent: "space-between", margin: "6px 0 16px"}}>
              <span style={{fontSize: "11px", color: seoTitle.length > 60 ? "#B4443C" : "#2E7D5B", fontWeight: 600}}>{seoTitle.length > 60 ? "Terlalu panjang" : "Panjang ideal"}</span>
              <span style={{fontSize: "11px", color: "var(--ink-soft)"}}>{seoTitle.length} / 60 karakter</span>
            </div>

            <label htmlFor="seo_desc" style={{display: "block", fontSize: "12px", fontWeight: 600, color: "var(--navy-900)", marginBottom: "7px"}}>Deskripsi singkat</label>
            <textarea id="seo_desc" name="seo_desc" value={seoDesc} onChange={e => setSeoDesc(e.target.value)} style={{width: "100%", height: "76px", padding: "10px 12px", fontSize: "13px", lineHeight: 1.55, border: "1px solid var(--line)", background: "#FFFFFF", color: "var(--ink)", resize: "none"}}></textarea>
            <div style={{display: "flex", justifyContent: "space-between", margin: "6px 0 16px"}}>
              <span style={{fontSize: "11px", color: seoDesc.length > 160 ? "#B4443C" : "#2E7D5B", fontWeight: 600}}>{seoDesc.length > 160 ? "Terlalu panjang" : "Panjang ideal"}</span>
              <span style={{fontSize: "11px", color: "var(--ink-soft)"}}>{seoDesc.length} / 160 karakter</span>
            </div>

            <label htmlFor="slug" style={{display: "block", fontSize: "12px", fontWeight: 600, color: "var(--navy-900)", marginBottom: "7px"}}>Alamat artikel (URL)</label>
            <input id="slug" name="slug" type="text" value={slug} onChange={e => setSlug(e.target.value)} style={{width: "100%", height: "42px", padding: "0 12px", fontSize: "13px", border: "1px solid var(--line)", background: "#FBFAF6", color: "var(--ink-soft)"}} />
          </div>

          <div style={{background: "var(--navy-950)", padding: "22px 24px"}}>
            <span style={{display: "block", fontSize: "11.5px", fontWeight: 700, color: "#B08D4F", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "14px"}}>Pratinjau di Hasil Pencarian</span>
            <div style={{background: "#FFFFFF", padding: "18px 18px"}}>
              <div style={{display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px"}}>
                <span style={{width: "22px", height: "22px", borderRadius: "50%", background: "var(--navy-100)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 800, color: "var(--navy-800)"}}>AZ</span>
                <div>
                  <div style={{fontSize: "11.5px", color: "#202124", fontWeight: 600, lineHeight: 1.2}}>Al Farizki &amp; Zhafir Law Firm</div>
                  <div style={{fontSize: "10.5px", color: "#5F6368", lineHeight: 1.2}}>alfarizkizhafir.com &rsaquo; berita</div>
                </div>
              </div>
              <div style={{fontSize: "16px", color: "#1A0DAB", lineHeight: 1.35, marginBottom: "5px"}}>{seoTitle || title}</div>
              <div style={{fontSize: "12.5px", color: "#4D5156", lineHeight: 1.55}}>{seoDesc}</div>
            </div>
            <p style={{fontSize: "11.5px", color: "#8FA0B8", margin: "12px 0 0", lineHeight: 1.6}}>Ilustrasi tampilan ringkasan artikel di mesin pencari. Hasil sebenarnya ditentukan oleh mesin pencari.</p>
          </div>

        </div>
      </form>
    </div>
  )
}
