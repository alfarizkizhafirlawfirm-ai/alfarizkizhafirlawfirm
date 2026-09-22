'use client'

export default function DeleteButton() {
  return (
    <button type="submit" onClick={(e) => {
      if(!confirm('Yakin ingin menghapus artikel ini?')) {
        e.preventDefault();
      }
    }} aria-label="Hapus artikel" style={{width: "32px", height: "32px", border: "1px solid var(--line)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"}}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B4443C" strokeWidth="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"></path></svg>
    </button>
  )
}
