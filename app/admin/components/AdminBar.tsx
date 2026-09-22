'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signOutAdmin } from '../actions'

export default function AdminBar({ showBackToDashboard = false }: { showBackToDashboard?: boolean }) {
  return (
    <div className="abar" style={{height: "52px", background: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 32px", flex: "0 0 52px"}}>
      <div className="abar-kiri" style={{display: "flex", alignItems: "center", gap: "18px"}}>
        <Image src="/images/logo-putih.png" alt="Al Farizki & Zhafir Law Firm" width={100} height={26} style={{height: "26px", width: "auto", display: "block"}} />
        <span style={{width: "1px", height: "20px", background: "rgba(255,255,255,0.2)"}}></span>
        <span style={{display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "#B08D4F", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase"}}>
          {!showBackToDashboard && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
          Mode Admin
        </span>
      </div>
      <div className="abar-kanan" style={{display: "flex", alignItems: "center", gap: "22px"}}>
        {showBackToDashboard ? (
          <Link href="/admin" style={{fontSize: "13px", color: "#C9D3E0", fontWeight: 500}}>&larr; Kembali ke daftar artikel</Link>
        ) : (
          <Link href="/" target="_blank" style={{display: "flex", alignItems: "center", gap: "7px", fontSize: "13px", color: "#C9D3E0", fontWeight: 500}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Lihat Website
          </Link>
        )}
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
          <span className="avatar" style={{width: "30px", height: "30px", borderRadius: "50%", background: "#B08D4F", color: "var(--navy-950)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700}}>A</span>
          <span style={{fontSize: "13px", color: "#FFFFFF", fontWeight: 500}}>Admin</span>
        </div>
        {!showBackToDashboard && (
          <form action={signOutAdmin}>
            <button type="submit" style={{fontSize: "13px", color: "#8FA0B8", fontWeight: 500, background: "none", border: "none", cursor: "pointer"}}>Keluar</button>
          </form>
        )}
      </div>
    </div>
  )
}
