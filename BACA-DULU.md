# Cara pakai paket desain ini di Antigravity

## Isi paket

- `design-reference/desain/` — 4 halaman desain final (bisa langsung dibuka di browser)
- `design-reference/screenshot/` — tampilan tiap halaman di HP, tablet, laptop
- `design-reference/public/images/` — semua foto & logo final (versi HD)
- `design-reference/konten.json` — isi teks: menu, fokus, tim + bio, WA, email, alamat
- `design-reference/PROMPT-ANTIGRAVITY.md` — instruksi lengkap buat agent Antigravity

## Langkahnya

1. **Ekstrak** zip ini.
2. **Pindahin folder `design-reference`** ke dalam folder project kamu (repo GitHub yang udah di-clone di Antigravity), sejajar sama file `README.md` repo.
3. **Buka project-nya di Antigravity**, terus buka chat agent-nya dan ketik:

   > Baca file `design-reference/PROMPT-ANTIGRAVITY.md` sampai habis, lalu kerjakan **Tahap 1** saja. Setelah selesai, berhenti dan tunjukkan hasilnya.

4. **Cek hasilnya** di browser (biasanya `npm run dev` → buka `http://localhost:3000`). Bandingkan sama gambar di folder `screenshot`. Kecilin jendela browser buat ngecek versi HP. Kalau ada yang beda, bilang ke agent-nya bagian mana.
5. Kalau Tahap 1 udah oke, lanjut: **"Lanjut Tahap 2"**, dan seterusnya sampai Tahap 5.

## Sebelum Tahap 2 (Supabase)

- Bikin project Supabase **pakai akun email kantor**.
- Ambil **Project URL** dan **anon / publishable key**, taruh di file `.env.local` (agent bakal bantu bikinin filenya).
- Jalankan SQL yang ada di bagian 6 file prompt di **Supabase → SQL Editor**.
- **Jangan pernah** commit file `.env.local` ke GitHub.

## Catatan

- Desain di Claude **ga perlu di-save**. Semuanya udah otomatis tersimpan dan link artifact-nya tetap bisa dibuka kapan aja.
- Foto **Arimbi dan Bayu** masih dari PDF company profile (resolusinya kecil). Kalau udah dapat file foto aslinya, tinggal timpa `public/images/tim/arimbi.jpg` dan `bayu.jpg` dengan nama file yang sama.
- Ikon **Real Estat** diambil dari gambar yang resolusinya kecil. Kalau ada file ikon aslinya, timpa `public/images/ikon/real-estat.png`.
