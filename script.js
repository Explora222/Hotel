// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Fade In Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.room-card').forEach(card => {
  observer.observe(card);
});

// Simple Lightbox for Gallery
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = 9999;
    lightbox.style.cursor = 'pointer';

    const largeImg = document.createElement('img');
    largeImg.src = img.src.replace('w=600', 'w=1200');
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '90%';
    largeImg.style.borderRadius = '12px';
    largeImg.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';

    lightbox.appendChild(largeImg);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});