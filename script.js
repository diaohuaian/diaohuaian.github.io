import { siteContent } from './content.js';

const storageKey = 'preferredLanguage';
const navLinks = [...document.querySelectorAll('[data-nav-link]')];
const languageToggle = document.querySelector('[data-language-toggle]');

function render(language) {
  const copy = siteContent[language];

  document.documentElement.lang = copy.htmlLang;

  navLinks.forEach((link, index) => {
    link.textContent = copy.nav[index];
  });

  document.querySelector('[data-hero-name]').textContent = copy.hero.name;
  document.querySelector('[data-hero-name-english]').textContent = copy.hero.nameEnglish;
  document.querySelector('[data-hero-title]').textContent = copy.hero.title;
  document.querySelector('[data-hero-subtitle]').textContent = copy.hero.subtitle;
  document.querySelector('[data-hero-welcome]').textContent = copy.hero.welcome;
}

function getInitialLanguage() {
  const stored = localStorage.getItem(storageKey);
  return stored === 'en' ? 'en' : 'zh';
}

let activeLanguage = getInitialLanguage();
render(activeLanguage);

languageToggle.addEventListener('click', () => {
  activeLanguage = activeLanguage === 'zh' ? 'en' : 'zh';
  localStorage.setItem(storageKey, activeLanguage);
  render(activeLanguage);
});
