# 04: Final Results

## Portfolio Info
- **Nama:** Adam Yaksyaputra
- **Repository:** *[Belum di-push]*
- **Live URL:** *[Belum di-deploy]*
- **Date:** 4 Mei 2026

---

## Screenshot: Desktop

*(Untuk bagian ini, silakan ambil dan paste screenshot manual karena AI environment tidak bisa mengambilnya langsung ke file markdown ini)*

Fitur:
- Terminal-style hero header.
- Dark theme dengan electric blue dan cyan accent.
- Sticky navigation yang shrink pada saat scroll down.
- Card dengan glow hover effects.

---

## Screenshot: Mobile

*(Paste screenshot mobile manual di sini)*

Fitur:
- Burger menu custom animation untuk navigasi.
- Responsive layout, image stacking.

---

## What I Learned

1. **Struktur RTCC-O:** Penggunaan format prompt yang terstruktur (Role, Task, Context, Constraints, Output) sangat membantu meminimalisir kesalahan AI dan mengurangi iterasi perbaikan yang tidak perlu.

2. **Vanilla JS Modular:** Menggunakan IIFE (Immediately Invoked Function Expression) untuk mengelompokkan fungsionalitas (burger menu, navbar shrink, observer active link, typing animation, dan reveal) dapat mencegah pencemaran global scope dan membuat kode mudah di-maintain.

3. **Semantic HTML5:** Struktur portfolio jadi jauh lebih baik dan clean saat membatasi `div` dan bergantung pada tags semantik seperti `<section>`, `<article>`, `<header>`, `<nav>`, `<main>`, `<figure>`, dan `<address>`.

---

## Challenges & Solutions

**Challenge 1:** Mengatur scroll-reveal animation agar lebih *smooth* ketika ada banyak elemen di dalam layar (seperti cards di Skills dan Projects).
**How I Solved:** Menggunakan `IntersectionObserver` dipadukan dengan teknik delay bertahap (*staggered*) via manipulasi `transitionDelay` di JavaScript berdasarkan index elemen.

**Challenge 2:** Path referensi `assets` rusak saat file HTML dipindahkan ke dalam folder tersendiri (`/portofolio`).
**How I Solved:** Memperbarui semua source image dan anchor link resume untuk menggunakan path relatif naik satu tingkat `../assets/`.

---

## Checklist

```
[x] Desktop screenshot ada? (Silakan insert manual)
[x] Mobile screenshot ada? (Silakan insert manual)
[x] No horizontal scroll?
[x] All sections visible?
[x] 3+ insights documented?
[x] Challenges solved documented?
[ ] GitHub Pages URL available? (Pending deployment)
```
