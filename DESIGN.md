---
name: Jadwal.in
description: Asisten AI Cerdas Manajemen Jadwal & Prioritas Mahasiswa
colors:
  primary: "#7c3aed"
  primary-dark: "#6324cc"
  primary-light: "#f5f0ff"
  accent: "#d97706"
  canvas: "#f8f7fb"
  surface: "#ffffff"
  surface-elevated: "#ffffff"
  surface-subtle: "#fbf9fe"
  text-main: "#181226"
  text-body: "#423859"
  text-muted: "#6e6484"
  text-subtle: "#988eaf"
  border: "#e9e4f0"
  border-subtle: "#f0ecf6"
  border-focus: "#c4b5fd"
  success: "#059669"
  success-bg: "#ecfdf5"
  warning: "#d97706"
  warning-bg: "#fffbeb"
  danger: "#dc2626"
  danger-bg: "#fee2e2"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.04em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "28px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "44px"
---

# Design System: Jadwal.in

## Overview

**Creative North Star: "The Focus Sanctuary" (Suaka Fokus Mahasiswa)**

Jadwal.in dirancang bukan sebagai sekadar kalender biasa, melainkan asisten pintar dan pendamping belajar (*companion*) yang menenangkan mahasiswa dari kekacauan tugas, tenggat waktu (*deadline*), dan jadwal kuliah. Ruang visualnya mengutamakan kejernihan mental, ketenangan visual (*calm computing*), dan hierarki informasi yang terarah.

Antarmuka ini menolak pendekatan visual "AI Slop" seperti gradien ungu neon berlebihan, glow murahan tanpa kontras, dan raw emoji berserakan. Sebaliknya, identitas Jadwal.in dibangun di atas palet warna *ambient violet-tinted neutral*, tipografi presisi, dan maskot Beavy yang ramah dan taktil.

**Key Characteristics:**
- **Tenang & Bersih**: Kanvas lembut dengan mesh ambient pastel yang tidak menyilaukan mata saat sesi belajar larut malam.
- **Taktil & Responsif**: Kontrol interaktif, chip filter, stepper durasi, dan checkbox tugas memiliki umpan balik sentuhan instan dan responsif.
- **Aksesibel & Berstandar WCAG**: Rasio kontras teks ≥ 4.5:1, target sentuh minimal 44×44px, dukungan `prefers-reduced-motion`, dan navigasi keyboard penuh.

---

## Colors

Palet warna terinspirasi dari transisi waktu belajar senja menuju malam yang tenang, menggabungkan ungu violet yang royal dengan nuansa pasir hangat dan kertas bersih.

- **Primary (`#7c3aed`)**: Warna aksi utama, fokus kalender, dan tombol konfirmasi primer.
- **Primary Dark (`#6324cc`)**: State aktif dan hover tombol primer.
- **Primary Light (`#f5f0ff`)**: Latar belakang seleksi, badge aktif, dan highlight baris tabel.
- **Accent Amber (`#d97706`)**: Menandai sesi waktu luang (*buffer/leisure*) dan rekomendasi Beavy AI.
- **Surface & Canvas (`#ffffff` / `#f8f7fb`)**: Permukaan kartu putih bersih di atas kanvas dengan radial ambient mesh lembut.
- **Text Hierarchy**:
  - `text-main` (`#181226`): Judul, angka statistik, dan teks kunci dengan ketajaman optimal.
  - `text-body` (`#423859`): Teks bacaan utama paragraf.
  - `text-muted` (`#6e6484`): Deskripsi sekunder, waktu sesi, dan subteks.
  - `text-subtle` (`#988eaf`): Metadata, keterangan footnote, dan placeholder.
- **Semantic Badges**:
  - Sukses: `#059669` di atas `#ecfdf5`
  - Bahaya / Deadline Mendesak: `#dc2626` di atas `#fee2e2`
  - Perhatian / Dalam Antrean: `#d97706` di atas `#fffbeb`

---

## Typography

Sistem tipografi menggunakan **Plus Jakarta Sans** untuk seluruh hierarki UI guna menjamin legibilitas tinggi pada berbagai resolusi layar, didukung oleh **JetBrains Mono** untuk angka waktu, durasi, dan indikator keyboard shortcut.

| Role | Font Family | Size | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| **Display** | Plus Jakarta Sans | 36px (2.25rem) | 800 (ExtraBold) | 1.2 | Hero title, login welcome |
| **Headline** | Plus Jakarta Sans | 28px (1.75rem) | 800 (ExtraBold) | 1.25 | Judul halaman dashboard |
| **Title** | Plus Jakarta Sans | 18px (1.15rem) | 700 (Bold) | 1.35 | Judul kartu, modul tugas |
| **Body** | Plus Jakarta Sans | 15px (0.95rem) | 400–600 | 1.6 | Deskripsi, teks percakapan chat |
| **Label / Meta** | Plus Jakarta Sans | 12px (0.78rem) | 700 (Bold) | 1.25 | Chip status, tanggal, tag kategori |
| **Mono Numerical** | JetBrains Mono | 13px (0.82rem) | 600 (SemiBold) | 1.2 | Jam mulai, durasi menit, shortcut |

---

## Layout

- **Desktop Shell**:
  - Sidebar tetap (*fixed*) selebar `260px` di sebelah kiri dengan navigasi vertikal, branding, tombol aksi cepat <kbd>N</kbd>, dan profil pengguna.
  - Viewport utama responsif dengan margin kiri `260px`, padding samping `2.8rem`, dan batas lebar maksimal `1400px`.
  - Navbar atas mengambang (*ambient frosted glass*) dengan tanggal di kiri serta rekomendasi Beavy AI dan tombol aksi cepat di kanan.
- **Grid Layout Halaman**:
  - **Beranda**: 2 Kolom Asimetris (Kiri 1.15fr: Jadwal & Tugas Teratas; Kanan 0.85fr: Waktu Luang & Beavy Companion).
  - **Prioritas & Tambah Tugas**: 2 Kolom Asimetris (Kiri 1.25fr: Form / Daftar Prioritas; Kanan 0.75fr: Prediksi AI Live).
  - **Kalender Jadwal**: Bar horizontal 7 hari dengan slot waktu berbasis blok dinamis.
- **Mobile Responsive**:
  - Pada layar `< 960px`, sidebar beralih ke mobile header atas dan bottom navigation bar yang ramah ibu jari.

---

## Elevation & Depth

Jadwal.in menggunakan sistem elevasi tonal halus (*soft ambient layering*) dengan bayangan bertingkat yang memiliki blur lembut dan offset terarah, menghindari bayangan keras (*hard borders/box-shadow*).

- **Elevasi 0 (Canvas)**: Background aplikasi datar bernuansa mesh pastel.
- **Elevasi 1 (Cards & Panels)**: `box-shadow: 0 2px 8px rgba(24, 18, 38, 0.04); border: 1px solid var(--color-border);`
- **Elevasi 2 (Interactive Cards on Hover)**: `box-shadow: 0 8px 24px rgba(24, 18, 38, 0.06); border-color: var(--color-border-focus);`
- **Elevasi 3 (Modals, Toasts, Dropdowns)**: `box-shadow: 0 16px 40px rgba(76, 29, 149, 0.12);`

---

## Shapes

- **Kontainer & Kartu Panel**: Sudut membulat modern (`border-radius: 18px` hingga `24px`).
- **Input & Form Fields**: Sudut membulat sedang (`border-radius: 12px`).
- **Tombol Aksi & Badge Kategori**: Bentuk pil penuh (`border-radius: 9999px`) yang memberikan kesan organik dan ramah.
- **Ikon Kotak**: Sudut membulat kecil (`border-radius: 8px` hingga `10px`).

---

## Components

### 1. Buttons
- **Primary**: Pil bergradien violet `#8b5cf6` ke `#7c3aed`, teks putih tebal, bayangan lembut terarah.
- **Secondary / Ghost**: Background putih atau transparan, border halus `#e9e4f0`, teks `#423859`.
- **Icon Button**: Kotak membulat `36×36px` dengan ikon SVG terpusat, hover highlight ungu transparan.

### 2. Task Cards & Prioritas
- Kartu berbasis status dengan checkbox taktil, tag kategori (`Kuliah`, `Praktikum`, `Kerja`), deadline, serta badge tingkat kesulitan (*Mudah*, *Sedang*, *Sulit*).
- Status terselesaikan memicu coretan halus dan opacity tereduksi tanpa menghilangkan teks.

### 3. Toast Notifications (`window.jadwalinToast`)
- Komponen notifikasi kustom yang mengambang di pojok kanan bawah desktop (dan tengah atas mobile), menggantikan `window.alert()`. Dilengkapi ikon status SVG (sukses, info, bahaya) dan animasi slide-in halus.

### 4. Beavy AI Chat & Companion Widget
- Bubble pesan asisten berlatar belakang ungu sangat lembut `#fbf9fe` dengan border aksen `#ede5f8`.
- Maskot Beavy ditampilkan dalam wadah avatar melingkar berbayangan lembut.

---

## Do's and Don'ts

### Do's:
- **Gunakan SVG Icon**: Selalu gunakan ikon SVG dengan ketebalan garis seragam (*stroke-width: 2px*) dari library konsisten (Lucide/Feather format).
- **Pertahankan Token**: Selalu gunakan variabel CSS `var(--color-...)` dari `src/styles/tokens.css`.
- **Gunakan Toast untuk Umpan Balik**: Panggil `window.jadwalinToast?.(message, type)` untuk interaksi pengguna; jangan gunakan dialog browser bawaan.
- **Sertakan `:focus-visible`**: Pastikan setiap kontrol keyboard dapat dilihat dengan ring fokus ungu yang kontras.
- **Berikan Alternatif Reduced Motion**: Hormati preferensi sistem dengan `@media (prefers-reduced-motion: reduce)`.

### Don'ts:
- **Jangan Gunakan Raw Emoji sebagai Ikon UI**: Dilarang menggunakan emoji seperti `📸, 📄, 📋, ⚙️, 💡` sebagai pengganti ikon aksi antarmuka.
- **Jangan Gunakan Native Alert/Confirm/Prompt**: Dilarang memanggil fungsi pemblokir layar bawaan browser.
- **Jangan Gunakan Warna Hardcoded Tanpa Alasan**: Hindari menulis kode heksadesimal baru di dalam komponen lokal jika sudah ada di token.
- **Jangan Gunakan Kicker / Eyebrow Berlebih**: Biarkan judul utama berbicara lugas tanpa label kecil redundan di atasnya.
- **Jangan Gunakan Efek Neon Menyilaukan**: Hindari glow ungu saturasi tinggi yang mengganggu legibilitas teks.
