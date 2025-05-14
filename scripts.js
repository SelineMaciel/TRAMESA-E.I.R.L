// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// === 1. Animaciones al hacer scroll (fade in)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated-section');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// === 2. Botón "Ir arriba"
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '⬆️';
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.padding = '0.75rem 1rem';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.background = '#fca311';
scrollTopBtn.style.color = '#000';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// === 3. Navegación activa en scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});