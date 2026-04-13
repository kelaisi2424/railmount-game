/**
 * Railmount Game Site - main.js
 * Handles: iframe lazy load, fullscreen, reload, navbar scroll, smooth scroll
 */

(function () {
  'use strict';

  const GAME_URL = 'https://hempuli.itch.io/railmount';
  const LOAD_DELAY = 500;

  // --- DOM Elements ---
  const iframe = document.getElementById('game-iframe');
  const loading = document.getElementById('game-loading');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnReload = document.getElementById('btn-reload');
  const navbar = document.getElementById('navbar');

  // --- Lazy Load Game iframe ---
  function loadGame() {
    if (iframe.src) return;
    setTimeout(function () {
      iframe.src = GAME_URL;
    }, LOAD_DELAY);
  }

  iframe.addEventListener('load', function () {
    if (!iframe.src) return;
    iframe.classList.add('loaded');
    if (loading) {
      loading.classList.add('hidden');
    }
  });

  loadGame();

  // --- Fullscreen ---
  btnFullscreen.addEventListener('click', function () {
    var wrapper = iframe.closest('.game-wrapper') || iframe;
    if (wrapper.requestFullscreen) {
      wrapper.requestFullscreen();
    } else if (wrapper.webkitRequestFullscreen) {
      wrapper.webkitRequestFullscreen();
    } else if (wrapper.msRequestFullscreen) {
      wrapper.msRequestFullscreen();
    }
  });

  // --- Reload Game ---
  btnReload.addEventListener('click', function () {
    iframe.classList.remove('loaded');
    if (loading) {
      loading.classList.remove('hidden');
    }
    iframe.src = '';
    setTimeout(function () {
      iframe.src = GAME_URL;
    }, 100);
  });

  // --- Navbar Scroll Effect ---
  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
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
