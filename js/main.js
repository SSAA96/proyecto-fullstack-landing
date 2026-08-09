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