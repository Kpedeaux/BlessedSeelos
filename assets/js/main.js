/**
 * Blessed Francis Xavier Seelos Catholic Church
 * Site behavior — small, dependency-free, progressive enhancement only.
 */
(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
      document.body.style.overflow = !open ? 'hidden' : '';
    });
    // Close on link click (mobile)
    nav.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      if (window.matchMedia('(min-width: 1024px)').matches) return;
      nav.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (nav.getAttribute('data-open') !== 'true') return;
      nav.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggle.focus();
    });
  }

  /* ---- Highlight today's row in the schedule ---- */
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayKey = days[new Date().getDay()];
  document.querySelectorAll('[data-day]').forEach((row) => {
    if (row.getAttribute('data-day') === todayKey) {
      row.classList.add('is-today');
      row.setAttribute('aria-current', 'date');
    }
  });

  /* ---- Reveal-on-scroll (subtle, opt-in via [data-reveal]) ---- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }

  /* ---- Set current year in footer ---- */
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Mark current page link with aria-current ---- */
  const path = location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  document.querySelectorAll('.primary-nav a[href]').forEach((a) => {
    const href = a.getAttribute('href').replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
    if (href === path) a.setAttribute('aria-current', 'page');
  });
})();
