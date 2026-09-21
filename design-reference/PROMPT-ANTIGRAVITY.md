# Brief Pembuatan Website — Al Farizki & Zhafir Law Firm

Kamu adalah developer yang membangun website resmi **Al Farizki & Zhafir Law Firm** (firma hukum di Malang). Desainnya **sudah final** dan ada di folder `design-reference/`. Tugasmu mengubah desain itu menjadi website sungguhan, **tampilannya harus sama persis** dengan desain.

Kerjakan **per tahap** (lihat bagian paling bawah). Setelah satu tahap selesai, **berhenti dan tunjukkan hasilnya ke saya** sebelum lanjut ke tahap berikutnya.

---

## 1. Isi folder `design-reference/`

| Path | Isi |
|---|---|
| `desain/beranda.html` | Halaman publik (satu halaman panjang: Beranda, Tentang Kami, Komitmen, Layanan, Tim Kami, Klien, Berita, footer) |
| `desain/login.html` | Halaman login admin |
| `desain/admin-berita.html` | Dashboard admin: daftar & kelola berita |
| `desain/tulis-berita.html` | Editor tulis/edit berita + pengaturan SEO + pratinjau Google |
| `screenshot/*.png` | Tampilan tiap halaman di **HP (390px)**, **tablet (820px)**, **laptop (1280px)**. Pakai untuk membandingkan hasil. |
| `public/images/` | Semua gambar final (logo, foto tim HD, ikon, logo klien). **Salin ke `public/images/` di project.** |
| `konten.json` | Data konten: menu, 10 bidang Fokus Kami, 4 anggota tim + bio lengkap, nomor WhatsApp, email, alamat |

File HTML desain memakai inline style. **Jangan salin inline style mentah-mentah.** Pecah jadi komponen React yang rapi dengan Tailwind, tapi hasil visualnya harus identik. Aturan responsif ada di blok `<style>` tiap file HTML (`@media (max-width: 760px)` untuk HP, `(min-width: 761px) and (max-width: 1100px)` untuk tablet). Itu adalah **spesifikasi responsif** yang wajib diikuti.

---

## 2. Teknologi

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS**
- **Supabase**: Auth (login admin), Postgres (tabel artikel), Storage (gambar sampul). Pakai paket `@supabase/ssr`.
- Font lewat `next/font/google`: **Playfair Display** (600, 700, 800, 900 + italic) untuk judul, **Work Sans** (400, 500, 600, 700) untuk teks.
- Gambar pakai `next/image`.
- Bahasa situs: Indonesia (`<html lang="id">`).

---

## 3. Identitas visual (ambil dari desain, jangan diubah)

```
--navy-950: #0A1C36   --navy-900: #0F2545   --navy-800: #173B6C   --navy-700: #25517F   --navy-100: #E7ECF3
--gold:     #B08D4F   --gold-light: #DCC28C
--paper:    #F8F6F1   --paper-alt: #F1ECE0  --line: #DEDACE
--ink:      #181818   --ink-soft: #57616D
```

- Judul (h1–h3) pakai Playfair Display.
- **Tanda "&" di dalam judul Playfair harus pakai font Work Sans** (class `.amp` di desain), karena "&" bawaan Playfair terlalu dekoratif untuk situs resmi kantor.
- Di data/teks biasa, tulis `&` apa adanya. **Jangan** tulis `&amp;` di string JavaScript (nanti muncul sebagai teks "&amp;").

---

## 4. Halaman & rute

| Rute | Desain | Keterangan |
|---|---|---|
| `/` | `desain/beranda.html` | Satu halaman dengan anchor `#beranda`, `#tentang`, `#tim`, `#layanan`, `#berita` |
| `/berita` | ikuti gaya bagian Berita di beranda | Semua artikel yang sudah terbit + filter kategori |
| `/berita/[slug]` | ikuti gaya situs | Halaman artikel lengkap (judul, sampul, penulis, tanggal, isi) |
| `/admin/login` | `desain/login.html` | Login email + kata sandi (Supabase Auth) |
| `/admin` | `desain/admin-berita.html` | Daftar artikel dari database, filter Semua/Terbit/Draf, tombol edit/lihat/hapus |
| `/admin/berita/baru` dan `/admin/berita/[id]` | `desain/tulis-berita.html` | Tulis & edit artikel |

Semua rute `/admin/*` (kecuali `/admin/login`) **wajib dilindungi**: kalau belum login atau bukan admin, arahkan ke `/admin/login`. Pakai `middleware.ts` + pengecekan di server.

---

## 5. Perilaku yang wajib ada

**Header & menu**
- Laptop/tablet: logo kiri, 5 menu kanan (BERANDA, TENTANG KAMI, TIM KAMI, LAYANAN, BERITA). **Tidak ada** tombol WhatsApp di header.
- HP (≤760px): logo kiri, tombol **garis tiga** di kanan. Diklik → menu turun ke bawah, ikonnya berubah jadi X. **Menu otomatis tertutup setelah salah satu menu dipilih** dan saat tombol Escape ditekan.
- Header tetap menempel di atas saat scroll (sticky).

**WhatsApp**
- Simpan nomor di satu tempat, misal `lib/site.ts`: `6285941862969`. Semua tombol WA ambil dari sini.
- Link: `https://wa.me/6285941862969?text=` + pesan terisi otomatis: *"Halo Al Farizki & Zhafir Law Firm, saya ingin berkonsultasi mengenai masalah hukum."* (di-`encodeURIComponent`). Buka di tab baru.
- **Tombol WhatsApp melayang** di pojok kanan bawah (position fixed), bulat emas + efek denyut. Di laptop ada label "Konsultasi via WhatsApp", di HP hanya bulatan. Efek denyut dimatikan kalau `prefers-reduced-motion`.

**Tim Kami**
- Urutan: Gilang → Zhafir → Arimbi → Bayu. Jabatan: Partner, Partner, Associate, Junior Associate.
- Kartu: foto + nama + jabatan. Diklik → profil lengkap terbuka di dalam kartu. **Hanya satu profil yang terbuka dalam satu waktu** (buka yang lain → yang sebelumnya menutup).
- Laptop/tablet: 2 atas 2 bawah. HP: satu kolom berurutan ke bawah.

**Tentang Kami**
- Foto dua founder dengan label nama kecil "Gilang Al Farizki Harman, S.H. — Founding Partner" dan "Zhafir Galang Arissaputra, S.H. — Founding Partner", posisinya **tidak sejajar** (lihat desain).
- HP: foto kiri, judul + kutipan kanan, dua paragraf pindah ke **bawah foto** selebar penuh.

**Aturan responsif HP (penting, permintaan klien)**
Di HP, **susunan tiap bagian tetap sama seperti di laptop, hanya diperkecil**. Jangan menumpuk semuanya jadi satu kolom. Ikuti jumlah kolom persis di media query desain:
- Statistik hero: 4 sejajar
- Fokus Kami: 4 kolom (di HP ikon di atas tulisan)
- Komitmen: 2 kolom
- Layanan: 3 kolom
- Klien: 4 kolom
- Berita: artikel utama kiri + daftar kanan
- Footer: 3 kolom
- Pengecualian yang disengaja: menu garis tiga dan Tim Kami (satu kolom).
- Halaman admin di HP juga tetap susunan laptop (tabel 5 kolom, editor kiri + panel pengaturan kanan).

---

## 6. Database Supabase

Jalankan SQL ini di **Supabase → SQL Editor**:

```sql
-- Tabel artikel
create table public.articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null check (category in ('Opini Hukum','Berita Kantor','Legal Update')),
  author text not null,
  excerpt text,
  content text not null default '',
  cover_url text,
  seo_title text,
  seo_description text,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.articles enable row level security;

-- Daftar akun admin
create table public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.admins enable row level security;
create policy "admin melihat dirinya" on public.admins
  for select using (auth.uid() = user_id);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- Aturan akses artikel
create policy "publik membaca artikel terbit" on public.articles
  for select using (status = 'published');
create policy "admin membaca semua" on public.articles
  for select using (public.is_admin());
create policy "admin menambah" on public.articles
  for insert with check (public.is_admin());
create policy "admin mengubah" on public.articles
  for update using (public.is_admin()) with check (public.is_admin());
create policy "admin menghapus" on public.articles
  for delete using (public.is_admin());

-- Penyimpanan gambar sampul (bisa dilihat publik, hanya admin yang boleh unggah)
insert into storage.buckets (id, name, public)
values ('sampul-berita', 'sampul-berita', true)
on conflict (id) do nothing;
create policy "admin unggah sampul" on storage.objects
  for insert to authenticated with check (bucket_id = 'sampul-berita' and public.is_admin());
create policy "admin ubah sampul" on storage.objects
  for update to authenticated using (bucket_id = 'sampul-berita' and public.is_admin());
create policy "admin hapus sampul" on storage.objects
  for delete to authenticated using (bucket_id = 'sampul-berita' and public.is_admin());
```

Akun admin dibuat manual di Supabase (Authentication → Users → tambah user), lalu user id-nya dimasukkan ke tabel `admins`. **Pendaftaran akun baru dari publik harus dimatikan** di pengaturan Authentication.

---

## 7. Fitur admin (sesuai desain)

- **Login**: email + kata sandi, pesan error yang jelas, tombol keluar.
- **Dashboard**: kartu ringkasan (total, terbit, draf). Kartu "Pembaca 30 hari terakhir" butuh layanan analytics. Sembunyikan dulu, atau tampilkan "—" sampai analytics dipasang.
- **Tabel artikel**: judul + alamat URL, kategori, penulis, status, aksi (edit, lihat, hapus dengan konfirmasi). Filter Semua/Terbit/Draf. Paginasi.
- **Editor**:
  - Judul, kategori (Opini Hukum / Berita Kantor / Legal Update), penulis (dropdown 4 anggota tim).
  - Unggah gambar sampul ke bucket `sampul-berita` (JPG/PNG, disarankan 1200×630).
  - Isi artikel pakai rich-text editor sederhana (misalnya Tiptap) dengan tombol Tebal, Miring, H2, Daftar, Tautan, Gambar. Simpan sebagai HTML, dan **sanitasi HTML** saat ditampilkan di halaman publik.
  - Pengaturan Pencarian: judul SEO (penghitung 60 karakter), deskripsi (penghitung 160 karakter), slug otomatis dari judul (bisa diedit).
  - Pratinjau hasil pencarian yang berubah langsung sesuai isian.
  - Tombol **Simpan Draf** dan **Terbitkan** (mengisi `published_at`).

---

## 8. Berita di halaman publik

- Bagian Berita di beranda: 1 artikel terbaru sebagai "Artikel Utama" (kiri) + 3 artikel berikutnya (kanan). Tombol kategori memfilter. Tombol "Lihat Semua Berita & Opini" → `/berita`.
- Kalau belum ada artikel terbit, tampilkan pesan kosong yang rapi. **Jangan** tampilkan placeholder `[Judul Artikel …]` di situs asli.
- Halaman publik membaca data di server (Server Components) dan diperbarui otomatis setelah admin menerbitkan (`revalidatePath`).

---

## 9. SEO (klien ingin muncul di Google saat nama firma dicari)

- Judul situs: **"Al Farizki & Zhafir Law Firm — Firma Hukum di Malang"**, lengkap dengan meta description.
- Tiap artikel: `generateMetadata` dari `seo_title` dan `seo_description`, canonical URL, Open Graph (pakai gambar sampul).
- `app/sitemap.ts` (beranda, /berita, semua artikel terbit) dan `app/robots.ts` (blokir `/admin`).
- JSON-LD `LegalService` di beranda: nama, alamat "Lowokwaru, Kota Malang", telepon +62 859-4186-2969, email alfarizkizhafirlawfirm@gmail.com, logo.
- Semua gambar punya `alt` yang jelas (lihat atribut alt di desain).

---

## 10. Keamanan (wajib)

- Kunci Supabase ada di `.env.local`: `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY` (di dashboard Supabase disebut juga *publishable key*). Pastikan `.env*.local` ada di `.gitignore` **sebelum commit pertama**.
- **Jangan pernah** memakai `service_role` / secret key di kode yang berjalan di browser.
- Semua aksi tulis/hapus dilakukan lewat Server Actions atau route handler yang mengecek sesi admin. RLS di database tetap jadi pengaman terakhir.

---

## 11. Tahapan kerja (berhenti di akhir tiap tahap)

1. **Tahap 1 — Tampilan publik statis.** Buat project Next.js + Tailwind + font. Salin `public/images`. Bangun `/` persis seperti `desain/beranda.html`, dengan data dari `konten.json` dan bagian Berita masih pakai contoh. Cek di lebar 390, 820, dan 1280 lalu bandingkan dengan `screenshot/beranda-*.png`.
2. **Tahap 2 — Supabase & login admin.** Pasang `@supabase/ssr`, `.env.local`, middleware proteksi `/admin`, halaman `/admin/login`.
3. **Tahap 3 — Dashboard & editor admin.** `/admin`, `/admin/berita/baru`, `/admin/berita/[id]`, termasuk unggah sampul, simpan draf, terbitkan, hapus.
4. **Tahap 4 — Berita publik.** Hubungkan bagian Berita di beranda ke database, lalu buat `/berita` dan `/berita/[slug]`.
5. **Tahap 5 — SEO & pengecekan akhir.** Metadata, sitemap, robots, JSON-LD, uji responsif di 3 ukuran, dan skor Lighthouse.

Kalau ada bagian desain yang tidak jelas atau tidak bisa dibuat persis, **tanya dulu**. Jangan mengarang konten baru.
