/**
 * Railmount Game Site - main.js
 * Handles: navbar scroll effect, smooth scroll for anchor links
 */

(function () {
  'use strict';

  var navbar = document.getElementById('navbar');

  // --- Navbar Scroll Effect ---
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
