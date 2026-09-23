'use client'

import Link from 'next/link'
import Image from 'next/image'
import { signOutAdmin } from '../actions'
import SubmitButton from './SubmitButton'

export default function AdminBar({ showBackToDashboard = false }: { showBackToDashboard?: boolean }) {
  return (
    <div className="abar flex items-center justify-between px-4 md:px-8 h-[52px] bg-navy-950 shrink-0">
      <div className="abar-kiri flex items-center gap-3 md:gap-4">
        <Image src="/images/logo-putih.png" alt="Al Farizki & Zhafir Law Firm" width={100} height={26} className="h-5 md:h-[26px] w-auto block" />
        <span className="w-px h-5 bg-white/20"></span>
        <span className="flex items-center gap-2 text-[10px] md:text-xs text-gold font-bold tracking-widest uppercase">
          {!showBackToDashboard && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hidden md:block"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
          <span className="hidden md:inline">Mode Admin</span>
          <span className="md:hidden">Admin</span>
        </span>
      </div>
      <div className="abar-kanan flex items-center gap-3 md:gap-[22px]">
        {showBackToDashboard ? (
          <Link href="/admin" className="text-xs md:text-[13px] text-[#C9D3E0] font-medium">&larr; <span className="hidden md:inline">Kembali ke daftar artikel</span></Link>
        ) : (
          <Link href="/" target="_blank" className="flex items-center gap-[7px] text-[13px] text-[#C9D3E0] font-medium hidden md:flex">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Lihat Website
          </Link>
        )}
        <div className="flex items-center gap-2">
          <span className="avatar w-7 h-7 md:w-[30px] md:h-[30px] rounded-full bg-gold text-navy-950 flex items-center justify-center text-[11px] md:text-xs font-bold">A</span>
          <span className="text-xs md:text-[13px] text-white font-medium hidden md:inline">Admin</span>
        </div>
        {!showBackToDashboard && (
          <form action={signOutAdmin}>
            <SubmitButton pendingText="Keluar..." className="text-xs md:text-[13px] text-[#8FA0B8] font-medium bg-transparent border-none cursor-pointer">Keluar</SubmitButton>
          </form>
        )}
      </div>
    </div>
  )
}
