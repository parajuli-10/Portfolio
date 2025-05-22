document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Mobile nav toggle
    const nav = document.querySelector('nav');
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
      });
    }
  
    // Close mobile nav on link click
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
        }
      });
    });
  
    // Section reveal on scroll
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('section').forEach(sec => {
      sec.classList.add('hidden');
      observer.observe(sec);
    });
  
    // Simple typewriter effect for hero heading
    const heroHeading = document.querySelector('#hero h1');
    if (heroHeading) {
      const text = heroHeading.textContent;
      heroHeading.textContent = '';
      let idx = 0;
      const speed = 100; // ms per character
      function type() {
        if (idx < text.length) {
          heroHeading.textContent += text.charAt(idx);
          idx++;
          setTimeout(type, speed);
        }
      }
      type();
    }
  });
  