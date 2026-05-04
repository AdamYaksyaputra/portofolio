# 03: Execution

## Prinsip

```
SETIAP STEP:
1. Kirim prompt ke AI
2. Review output AI
3. Fix jika perlu
4. Lanjut step berikutnya
```

---

## RTCC-O Checklist (Per Prompt)

```
□ R — Role dispesifikasi?
□ T — Task konkret?
□ C — Context cukup?
□ C — Constraints jelas?
□ O — Output format ditentukan?
```

---

## Step 1: Semantic HTML Structure

### Prompt

```
Role: Senior front-end developer dengan keahlian HTML semantik

Task: Buat struktur HTML dasar untuk portfolio single page

Context:
- Tech: HTML5
- Section: hero, about, skills, projects, contact
- Audience: recruiter
- Identity: modern & clean

Constraints:
- Gunakan semantic HTML5 (header, nav, main, section, footer)
- Tidak menggunakan div berlebihan
- Struktur harus rapi dan readable

Output:
- Hanya kode HTML
- Tanpa CSS
- Beri komentar pada setiap section
```

### RTCC-O Check

- R: ✅ Senior front-end developer, HTML semantik
- T: ✅ Buat struktur HTML portfolio single page
- C: ✅ Tech HTML5, sections, audience, identity
- C: ✅ Semantic elements, no excess div, readable
- O: ✅ Hanya HTML, tanpa CSS, dengan komentar

### AI Response

Output: `portofolio/index.html`

Struktur yang dihasilkan:
- `<header>` + `<nav>` dengan nav-logo dan link navigasi
- `<main>` membungkus semua section konten
- `<section id="hero">` — intro + CTA
- `<section id="about">` — artikel + foto profil dalam `<figure>`
- `<section id="skills">` — 3 `<article>` per kategori skill
- `<section id="projects">` — 3 `<article class="project-card">`
- `<section id="contact">` — `<address>` dengan link kontak
- `<footer>` — kredit + navigasi sosial media
- `<script>` — IntersectionObserver untuk scroll reveal

### Review

- [✅] Sesuai constraints? Semantic HTML5 digunakan dengan benar
- [✅] Format sesuai? Komentar per section, struktur rapi
- [✅] Bisa dipahami? Readable, indentasi konsisten
- Changes: Ditambahkan class `reveal` + wrapper `div.skills-grid` dan `div.projects-grid` setelah integrasi CSS

---

## Step 2: Dark Mode CSS Styling

### Prompt

```
Role: Senior front-end developer dengan keahlian CSS modern

Task: Buat styling CSS lengkap untuk portfolio single page yang sudah
dibuat di Step 1 (index.html)

Context:
- Color: Dark navy + electric blue + cyan
- Typography: Inter (heading & body), JetBrains Mono (code/terminal)
- Layout: Single Page, mobile-first
- Style: Terminal Hero — hero section bergaya terminal dengan cursor blink
- Audience: recruiter (startup & corporate)

Constraints:
- Vanilla CSS, tanpa framework
- Mobile-first breakpoints
- Gunakan CSS custom properties (design tokens)
- Animasi subtle: fadeInUp pada hero, scroll reveal pada section
- Hover effects pada card & nav link

Output:
- File: style.css
- Terstruktur dengan komentar per section
- Design tokens di :root
```

### RTCC-O Check

- R: ✅ Senior front-end developer, CSS modern
- T: ✅ Styling lengkap untuk portfolio
- C: ✅ Color palette, typography, layout, audience
- C: ✅ Vanilla CSS, mobile-first, custom properties, animasi
- O: ✅ style.css, terstruktur, dengan komentar

### AI Response

Output: `portofolio/style.css`

Fitur yang dihasilkan:
- Design tokens di `:root` — warna, spacing, radius, font, shadow
- Background grid texture subtle via `body::before`
- Navigation — fixed, blur backdrop, terminal-style hover `// link`
- Hero — full-viewport, terminal cursor blink (`_`), staggered `fadeInUp`
- About — grid 2 kolom (text + foto), hover grayscale effect
- Skills — `article` card dengan hover glow + `▹` list prefix
- Projects — `project-card` dengan top-border gradient on hover
- Contact — centered CTA dengan `<address>` semantic
- Footer — mono font, sosial links
- `@keyframes fadeInUp` + `blink` + `.reveal` / `.visible` scroll trigger
- Responsive breakpoints: `≥768px` tablet, `<768px` mobile

### Review

- [✅] Sesuai constraints? Vanilla CSS, no framework, mobile-first
- [✅] Format sesuai? Terstruktur dengan komentar per section
- [✅] Bisa dipahami? Design tokens di :root, naming konsisten
- Changes: Ditambahkan `.skills-grid` dan `.projects-grid` class setelah review HTML structure

---

## Step 3: JavaScript Interactivity

### Prompt

```
Role: Senior front-end developer dengan keahlian vanilla JavaScript modern

Task: Buat interaktivitas JavaScript untuk portfolio

Context:
- Tech: Vanilla JS
- Fitur:
  1. Burger menu untuk navigasi mobile
  2. Navbar shrink effect saat scroll
  3. Active nav link highlight saat scroll
  4. Typing animation di hero section
  5. Staggered scroll reveal delay untuk cards

Constraints:
- Tanpa jQuery / framework
- Gunakan IIFE / modular function
- Clean & readable code

Output:
- File: main.js
- Script diletakkan sebelum </body> di index.html
```

### RTCC-O Check

- R: ✅ Senior front-end developer, Vanilla JS
- T: ✅ Buat interaktivitas JavaScript portfolio
- C: ✅ Tech Vanilla JS, list fitur spesifik
- C: ✅ Tanpa library, IIFE, clean code
- O: ✅ File main.js

### AI Response

Output: `portofolio/main.js`

Fitur:
- `initBurgerMenu()` — toggle class `nav-open`
- `initNavbarShrink()` — penambahan class `scrolled` saat scrollY > 50
- `initActiveNav()` — update class `active` di navigasi sesuai section yang terlihat
- `initTypingAnimation()` — typing dan deleting effect pada `h2` di hero
- `initStaggerReveal()` — IntersectionObserver untuk kemunculan konten beruntun

### Review

- [✅] Sesuai constraints? Vanilla JS, modular IIFE
- [✅] Format sesuai? Berhasil melengkapi file HTML dengan script dan menambah styling di CSS
- [✅] Bisa dipahami? Script sangat rapi dengan modular function dan penjelasan
- Changes: Ditambahkan styling ke CSS untuk `#burger-menu`, state `scrolled`, dan animasi ketik (`blink`)

---

## Step 4: Content & Polish

### Prompt

```
Role: Developer / System Engineer

Task: Update path assets dan memastikan koneksi file di HTML

Context:
- Folder assets sudah ada di luar folder portofolio (`c:\laragon\www\portoadam\assets`)
- File HTML ada di dalam folder `portofolio`

Constraints:
- Sesuaikan tag `img` dan `a` href untuk referensi asset

Output:
- Update path di `index.html` menjadi `../assets/...`
```

### RTCC-O Check

- R: ✅ Developer yang melakukan finishing
- T: ✅ Update assets path
- C: ✅ Kondisi path saat ini
- C: ✅ Edit link / source menjadi relatif naik 1 tingkat
- O: ✅ Update index.html

### AI Response

HTML diperbarui:
- `assets/profile.jpg` -> `../assets/profile.jpg`
- `assets/resume-adam.pdf` -> `../assets/resume-adam.pdf`

### Review

- [✅] Sesuai constraints? Ya, menggunakan path relative `../`
- [✅] Format sesuai?
- [✅] Bisa dipahami?

---

## Common Mistakes

| Mistake | How to Avoid |
|---------|--------------|
| Prompt terlalu panjang | Pecah jadi step kecil |
| Skip review | Baca setiap baris output |
| Copy-paste tanpa paham | Tanya ke AI jika bingung |
| Lanjut tanpa fix | Fix sebelum next step |
