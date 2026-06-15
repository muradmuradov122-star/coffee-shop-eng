/* ============================================================
   Terra Coffee — main.js
   Minimal JavaScript. Behavior only.
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile Navigation Toggle ─────────────────────────────── */
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

      if (isOpen) {
        mobileNav.removeAttribute('hidden');
      } else {
        mobileNav.setAttribute('hidden', '');
      }
    });

    /* Close mobile nav when a nav link is clicked */
    var mobileLinks = mobileNav.querySelectorAll('.nav-link');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('hidden', '');
      });
    });

    /* Close mobile nav on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('hidden', '');
        hamburger.focus();
      }
    });
  }

  /* ── Header: add scrolled shadow ─────────────────────────── */
  var siteHeader = document.querySelector('.site-header');

  if (siteHeader) {
    var onScroll = function () {
      if (window.scrollY > 10) {
        siteHeader.style.boxShadow = '0 2px 12px rgba(44, 36, 32, 0.08)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* run once on load */
  }

})();
