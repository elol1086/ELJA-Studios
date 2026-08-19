// ============ Respect reduced motion for hero video ============
const heroVideo = document.querySelector('.hero-video');
if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  heroVideo.removeAttribute('autoplay');
  heroVideo.pause();
}

// ============ Header background swap on scroll ============
const header = document.getElementById('siteHeader');
if (header) {
  const solidFromStart = header.hasAttribute('data-solid-from-start');
  const onScroll = () => {
    const trigger = solidFromStart ? 0 : window.innerHeight * 0.7;
    header.classList.toggle('is-solid', window.scrollY > trigger || solidFromStart);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ============ Mobile nav toggle ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============ Scroll reveal ============
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

// ============ Services accordion ============
document.querySelectorAll('.acc-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.acc-item');
    const wasOpen = item.classList.contains('is-open');
    item.parentElement.querySelectorAll('.acc-item').forEach(i => {
      i.classList.remove('is-open');
      i.querySelector('.acc-panel').style.maxHeight = '';
    });
    if (!wasOpen) {
      item.classList.add('is-open');
      const panel = item.querySelector('.acc-panel');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// Keep open accordion panels from clipping if the layout reflows (e.g. orientation change)
window.addEventListener('resize', () => {
  document.querySelectorAll('.acc-item.is-open .acc-panel').forEach(panel => {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  });
});

// ============ Footer year ============
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
