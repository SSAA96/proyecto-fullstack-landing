const THEME_KEY = 'flowly-theme';
 
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
 
function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  themeToggleBtn.setAttribute('aria-pressed', theme === 'dark');
  themeToggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}
 
const savedTheme = localStorage.getItem(THEME_KEY) ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);
 
themeToggleBtn.addEventListener('click', () => {
  const nextTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});
 
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const backToTopBtn = document.getElementById('back-to-top');
 
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('is-visible', window.scrollY > 400);
});
 
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.classList.add('was-validated');
    contactSuccess.hidden = true;
    return;
  }

  contactForm.classList.remove('was-validated');
  contactForm.reset();
  contactSuccess.hidden = false;
});
