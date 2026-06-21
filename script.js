import { siteContent } from './content.js';

const storageKey = 'preferredLanguage';
const navLinks = [...document.querySelectorAll('[data-nav-link]')];
const languageToggle = document.querySelector('[data-language-toggle]');

function renderCards(items) {
  return items
    .map(
      (item) => `
        <article class="section-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join('');
}

function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

function renderTeaching(copy) {
  return `
    <div class="teaching-grid">
      <article class="section-card">
        <h3>${copy.teaching.undergraduateTitle}</h3>
        <ul>${renderList(copy.teaching.undergraduate)}</ul>
      </article>
      <article class="section-card">
        <h3>${copy.teaching.graduateTitle}</h3>
        <ul>${renderList(copy.teaching.graduate)}</ul>
      </article>
    </div>
  `;
}

function renderContact(copy) {
  return `
    <div class="contact-grid">
      <article class="section-card">
        <h3>${copy.contact.emailLabel}</h3>
        <p><a href="mailto:${copy.contact.email}">${copy.contact.email}</a></p>
      </article>
      <article class="section-card">
        <h3>${copy.contact.officeLabel}</h3>
        <p>${copy.contact.office}</p>
      </article>
      <article class="section-card">
        <h3>${copy.contact.phoneLabel}</h3>
        <p>${copy.contact.phone}</p>
      </article>
      <article class="section-card">
        <h3>${copy.contact.facultyPageLabel}</h3>
        <p><a href="${copy.contact.facultyPageHref}" target="_blank" rel="noreferrer">${copy.contact.facultyPageText}</a></p>
      </article>
    </div>
  `;
}

function renderStudentSection(copy) {
  return `
    <div class="students-grid">
      <article class="section-card">
        <h3>${copy.students.prospectiveTitle}</h3>
        <ul>${renderList(copy.students.prospective)}</ul>
      </article>
      <article class="section-card">
        <h3>${copy.students.opportunitiesTitle}</h3>
        <ul>${renderList(copy.students.opportunities)}</ul>
      </article>
    </div>
    <div class="student-outcomes">
      <h3>${copy.students.outcomesTitle}</h3>
      <p>${copy.students.outcomesEmptyState}</p>
    </div>
  `;
}

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

  document.querySelector('[data-research-title]').textContent = copy.sectionTitles.research;
  document.querySelector('[data-publications-title]').textContent = copy.sectionTitles.publications;
  document.querySelector('[data-teaching-title]').textContent = copy.sectionTitles.teaching;
  document.querySelector('[data-students-title]').textContent = copy.sectionTitles.students;
  document.querySelector('[data-contact-title]').textContent = copy.sectionTitles.contact;

  document.querySelector('[data-research-list]').innerHTML = renderCards(copy.research);
  document.querySelector('[data-publication-list]').innerHTML = renderList(copy.publications);
  document.querySelector('[data-teaching-content]').innerHTML = renderTeaching(copy);
  document.querySelector('[data-students-content]').innerHTML = renderStudentSection(copy);
  document.querySelector('[data-contact-content]').innerHTML = renderContact(copy);
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
