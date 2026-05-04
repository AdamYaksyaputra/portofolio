/**
 * main.js — Portfolio Adam Yaksyaputra
 * ============================================================
 * Fitur:
 *  1. Burger menu untuk mobile
 *  2. Navbar shrink saat scroll
 *  3. Active nav link highlight berdasarkan section yang terlihat
 *  4. Typing animation pada hero tagline
 *  5. Scroll reveal (IntersectionObserver) — sudah inline di HTML,
 *     diperkuat di sini dengan stagger delay per card
 * ============================================================
 */

/* ============================================================
   1. BURGER MENU — Toggle navigasi mobile
============================================================ */
(function initBurgerMenu() {
  const nav = document.querySelector('nav ul');
  const header = document.querySelector('header');

  // Buat tombol burger secara dinamis
  const burger = document.createElement('button');
  burger.id = 'burger-menu';
  burger.setAttribute('aria-label', 'Buka menu navigasi');
  burger.setAttribute('aria-expanded', 'false');
  burger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  // Sisipkan burger sebelum ul
  header.querySelector('nav').appendChild(burger);

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.classList.toggle('active', isOpen);
  });

  // Tutup menu saat link diklik
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('active');
    });
  });
})();

/* ============================================================
   2. NAVBAR SHRINK — Tambah class saat scroll
============================================================ */
(function initNavbarShrink() {
  const header = document.querySelector('header');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
})();

/* ============================================================
   3. ACTIVE NAV LINK — Highlight link sesuai section visible
============================================================ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(section => observer.observe(section));
})();

/* ============================================================
   4. TYPING ANIMATION — Hero tagline (h2)
============================================================ */
(function initTypingAnimation() {
  const target = document.querySelector('#hero h2');
  if (!target) return;

  const phrases = [
    'I build things for the web.',
    'I craft clean & fast UIs.',
    'I turn ideas into products.',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 70;
  const deletingSpeed = 40;
  const pauseDuration = 2000;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      target.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseDuration);
        return;
      }
    } else {
      target.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  // Mulai setelah hero animation selesai
  setTimeout(type, 1200);
})();


