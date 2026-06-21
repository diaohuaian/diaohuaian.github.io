# Diaohuaian Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a bilingual personal academic website for Professor Huaian Diao that highlights research, teaching, student opportunities, and student outcomes on GitHub Pages.

**Architecture:** Use a polished single-page static site with anchored sections and a lightweight client-side language toggle. Keep content in a structured `content.js` module, render it with a small `script.js` module, and verify user-facing behavior with Playwright against a local static server.

**Tech Stack:** HTML, CSS, vanilla JavaScript modules, Playwright, Python `http.server`, GitHub Pages

---

## File Map

- `index.html`
  - Single-page shell, semantic sections, navigation, language toggle, and render targets.
- `style.css`
  - All visual design, layout, responsive behavior, and typography.
- `content.js`
  - Bilingual structured content for hero copy, research, publications, teaching, students, and contact.
- `script.js`
  - Rendering logic, language toggle behavior, local storage persistence, and reusable section renderers.
- `assets/`
  - Profile image and any small static assets needed by the page.
- `.gitignore`
  - Ignore local OS noise and test artifacts.
- `package.json`
  - Local scripts for previewing and testing the site.
- `playwright.config.mjs`
  - Browser test configuration and local static server wiring.
- `tests/site-shell.spec.js`
  - Smoke test for the page shell and anchor navigation.
- `tests/language-toggle.spec.js`
  - Test for bilingual rendering and persisted language toggle behavior.
- `tests/sections.spec.js`
  - Tests for research, publications, teaching, and contact section rendering.
- `tests/students.spec.js`
  - Tests for the students page structure, empty state, and later populated outcomes table.
- `tests/responsive.spec.js`
  - Mobile-layout and no-overflow verification.
- `README.md`
  - Local preview, test, edit, and publish instructions.

## Task 1: Bootstrap the Site Shell and Test Harness

**Files:**
- Create: `/Users/huaian/Sites/diaohuaian.github.io/.gitignore`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/package.json`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/playwright.config.mjs`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/tests/site-shell.spec.js`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/index.html`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/style.css`

- [ ] **Step 1: Create the test harness files before writing production markup**

```gitignore
.DS_Store
node_modules/
playwright-report/
test-results/
```

```json
{
  "name": "diaohuaian.github.io",
  "private": true,
  "type": "module",
  "scripts": {
    "serve": "python3 -m http.server 4173 --bind 127.0.0.1",
    "test:e2e": "playwright test"
  }
}
```

```js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:4173'
  },
  webServer: {
    command: 'python3 -m http.server 4173 --bind 127.0.0.1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 10_000
  }
});
```

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm install -D @playwright/test
npx playwright install
```

- [ ] **Step 2: Write the failing smoke test for the empty site shell**

```js
import { test, expect } from '@playwright/test';

test('renders the site shell with anchor navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Huaian Diao/);
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home');
  await expect(page.getByRole('link', { name: 'Research' })).toHaveAttribute('href', '#research');
  await expect(page.getByRole('link', { name: 'Publications' })).toHaveAttribute('href', '#publications');
  await expect(page.getByRole('link', { name: 'Teaching' })).toHaveAttribute('href', '#teaching');
  await expect(page.getByRole('link', { name: 'Students' })).toHaveAttribute('href', '#students');
  await expect(page.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
});
```

- [ ] **Step 3: Run the smoke test and verify it fails because the page shell does not exist yet**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/site-shell.spec.js
```

Expected:

```text
FAIL tests/site-shell.spec.js
Error: expect(page).toHaveTitle(/Huaian Diao/)
```

- [ ] **Step 4: Write the minimal site shell needed to pass the smoke test**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huaian Diao | Personal Website</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="site-header">
      <div class="site-brand">
        <span class="site-name">Huaian Diao</span>
        <span class="site-affiliation">School of Mathematics, Jilin University</span>
      </div>
      <nav aria-label="Primary" class="site-nav">
        <a href="#home">Home</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#teaching">Teaching</a>
        <a href="#students">Students</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="home"><h1>Loading...</h1></section>
      <section id="research"><h2>Research</h2></section>
      <section id="publications"><h2>Publications</h2></section>
      <section id="teaching"><h2>Teaching</h2></section>
      <section id="students"><h2>Students</h2></section>
      <section id="contact"><h2>Contact</h2></section>
    </main>
  </body>
</html>
```

```css
:root {
  color-scheme: light;
  font-family: "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f7f8fb;
  color: #18212f;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.25rem 2rem;
  background: #ffffff;
  border-bottom: 1px solid #d8deea;
}

.site-brand {
  display: flex;
  flex-direction: column;
}

.site-name {
  font-size: 1.125rem;
  font-weight: 700;
}

.site-affiliation {
  font-size: 0.95rem;
  color: #516078;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.site-nav a {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}

main {
  padding: 2rem;
}

section {
  min-height: 8rem;
  padding: 2rem 0;
}
```

- [ ] **Step 5: Run the smoke test again and verify it passes**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/site-shell.spec.js
```

Expected:

```text
PASS tests/site-shell.spec.js
1 passed
```

- [ ] **Step 6: Commit the bootstrap**

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git add .gitignore package.json playwright.config.mjs tests/site-shell.spec.js index.html style.css package-lock.json
git commit -m "feat: bootstrap personal website shell"
```

## Task 2: Add the Bilingual Content Model and Language Toggle

**Files:**
- Create: `/Users/huaian/Sites/diaohuaian.github.io/content.js`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/script.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/index.html`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/tests/language-toggle.spec.js`

- [ ] **Step 1: Write the failing language-toggle test**

```js
import { test, expect } from '@playwright/test';

test('defaults to Chinese and toggles to English with persistence', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  await expect(page.getByRole('heading', { level: 1, name: '刁怀安' })).toBeVisible();

  const toggle = page.getByRole('button', { name: '中文 | EN' });
  await expect(toggle).toBeVisible();
  await toggle.click();

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1, name: /Huaian Diao/ })).toBeVisible();
  await expect(page.getByText('Prospective undergraduate and graduate students are welcome to get in touch.')).toBeVisible();

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});
```

- [ ] **Step 2: Run the language-toggle test and verify it fails**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/language-toggle.spec.js
```

Expected:

```text
FAIL tests/language-toggle.spec.js
Error: expect(locator).toHaveAttribute('lang', 'zh-CN')
```

- [ ] **Step 3: Implement the bilingual content model and render the hero copy**

```js
export const siteContent = {
  zh: {
    htmlLang: 'zh-CN',
    nav: ['首页', '研究', '成果', '教学', '学生', '联系'],
    hero: {
      name: '刁怀安',
      nameEnglish: 'Huaian Diao',
      title: '吉林大学数学学院教授、博士生导师',
      subtitle: '研究方向包括数学物理反问题、波散射、谱理论与数值计算。',
      welcome: '欢迎对相关方向感兴趣的本科生和研究生联系交流。'
    }
  },
  en: {
    htmlLang: 'en',
    nav: ['Home', 'Research', 'Publications', 'Teaching', 'Students', 'Contact'],
    hero: {
      name: 'Huaian Diao',
      nameEnglish: 'Professor Huaian Diao',
      title: 'Professor, School of Mathematics, Jilin University',
      subtitle: 'Research interests include inverse problems in mathematical physics, wave scattering, spectral theory, and numerical computation.',
      welcome: 'Prospective undergraduate and graduate students are welcome to get in touch.'
    }
  }
};
```

```js
import { siteContent } from './content.js';

const sectionIds = ['home', 'research', 'publications', 'teaching', 'students', 'contact'];
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
```

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huaian Diao | Personal Website</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="site-header">
      <div class="site-brand">
        <span class="site-name">Huaian Diao</span>
        <span class="site-affiliation">School of Mathematics, Jilin University</span>
      </div>
      <div class="site-header-actions">
        <nav aria-label="Primary" class="site-nav">
          <a data-nav-link href="#home">首页</a>
          <a data-nav-link href="#research">研究</a>
          <a data-nav-link href="#publications">成果</a>
          <a data-nav-link href="#teaching">教学</a>
          <a data-nav-link href="#students">学生</a>
          <a data-nav-link href="#contact">联系</a>
        </nav>
        <button type="button" class="language-toggle" data-language-toggle>中文 | EN</button>
      </div>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-copy">
          <p class="hero-kicker">School of Mathematics, Jilin University</p>
          <h1 data-hero-name>刁怀安</h1>
          <p class="hero-name-english" data-hero-name-english>Huaian Diao</p>
          <p class="hero-title" data-hero-title>吉林大学数学学院教授、博士生导师</p>
          <p class="hero-subtitle" data-hero-subtitle>研究方向包括数学物理反问题、波散射、谱理论与数值计算。</p>
          <p class="hero-welcome" data-hero-welcome>欢迎对相关方向感兴趣的本科生和研究生联系交流。</p>
        </div>
      </section>
      <section id="research"><h2>Research</h2></section>
      <section id="publications"><h2>Publications</h2></section>
      <section id="teaching"><h2>Teaching</h2></section>
      <section id="students"><h2>Students</h2></section>
      <section id="contact"><h2>Contact</h2></section>
    </main>

    <script type="module" src="./script.js"></script>
  </body>
</html>
```

- [ ] **Step 4: Run the shell and language tests and verify they pass**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/site-shell.spec.js tests/language-toggle.spec.js
```

Expected:

```text
PASS tests/site-shell.spec.js
PASS tests/language-toggle.spec.js
2 passed
```

- [ ] **Step 5: Commit the bilingual foundation**

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git add content.js script.js index.html tests/language-toggle.spec.js
git commit -m "feat: add bilingual hero and language toggle"
```

## Task 3: Render Research, Publications, Teaching, and Contact Content

**Files:**
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/content.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/script.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/index.html`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/tests/sections.spec.js`

- [ ] **Step 1: Write the failing content-sections test**

```js
import { test, expect } from '@playwright/test';

test('renders research, selected publications, teaching, and contact content in Chinese', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#research .section-card')).toHaveCount(4);
  await expect(page.locator('#publications li')).toHaveCount(6);
  await expect(page.getByRole('heading', { name: '本科生课程' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '研究生课程' })).toBeVisible();
  await expect(page.getByText('diao@jlu.edu.cn')).toBeVisible();
  await expect(page.getByText('伍卓群楼524')).toBeVisible();
});
```

- [ ] **Step 2: Run the content-sections test and verify it fails**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/sections.spec.js
```

Expected:

```text
FAIL tests/sections.spec.js
Error: expect(locator).toHaveCount(4)
```

- [ ] **Step 3: Add structured bilingual content and render the four sections**

```js
export const siteContent = {
  zh: {
    htmlLang: 'zh-CN',
    nav: ['首页', '研究', '成果', '教学', '学生', '联系'],
    sectionTitles: {
      research: '研究方向',
      publications: '代表性成果',
      teaching: '教学',
      contact: '联系'
    },
    hero: {
      name: '刁怀安',
      nameEnglish: 'Huaian Diao',
      title: '吉林大学数学学院教授、博士生导师',
      subtitle: '研究方向包括数学物理反问题、波散射、谱理论与数值计算。',
      welcome: '欢迎对相关方向感兴趣的本科生和研究生联系交流。'
    },
    research: [
      { title: '数学物理反问题', body: '关注由有限测量恢复介质、源项和几何结构的理论与计算方法。' },
      { title: '波散射', body: '研究声学、弹性与电磁散射中的唯一性、稳定性与可见性问题。' },
      { title: '谱理论', body: '结合传输特征值、散射共振和相关谱性质开展分析。' },
      { title: '数值计算', body: '围绕矩阵计算、优化与偏微分方程数值方法开展研究。' }
    ],
    publications: [
      'H. Diao and H. Liu, Spectral Geometry and Inverse Scattering Theory, Springer, 2023.',
      'H. Diao, H. Liu, and Q. Meng, Dislocations with corners in an elastic body with applications to fault detection, SIAM J. Appl. Math. 85 (2025).',
      'W. Zhou, H. Diao, and H. Liu, Quasi-Minnaert resonances in high-contrast acoustic structures and applications to invisibility cloaking, J. Comput. Phys. 541 (2025).',
      'H. Diao, X. Fei, and H. Liu, On a novel unique continuation principle result and its application to inverse conductive scattering, SIAM J. Math. Anal. 57 (2025).',
      'H. Diao, R. Tang, H. Liu, and J. Tang, Unique determination by a single far-field measurement for an inverse elastic problem, Inverse Probl. Imaging 18 (2024).',
      'H. Diao, H. Li, H. Liu, and J. Tang, Spectral properties of an acoustic-elastic transmission eigenvalue problem with applications, J. Differential Equations 371 (2023).'
    ],
    teaching: {
      undergraduateTitle: '本科生课程',
      graduateTitle: '研究生课程',
      undergraduate: ['现代优化算法', '复变函数', '数值分析', '凸分析', '微分方程数值解', '离散数学', '线性代数A'],
      graduate: ['非线性问题数值解', '矩阵计算', '最优化计算', '微分方程差分方法']
    },
    contact: {
      emailLabel: '电子邮箱',
      email: 'diao@jlu.edu.cn',
      officeLabel: '办公地点',
      office: '吉林大学中心校区伍卓群楼524',
      phoneLabel: '办公电话',
      phone: '0431-85166214',
      facultyPageLabel: '学院主页',
      facultyPageHref: 'https://math.jlu.edu.cn/info/1782/16720.htm',
      facultyPageText: '吉林大学数学学院教师主页'
    }
  },
  en: {
    htmlLang: 'en',
    nav: ['Home', 'Research', 'Publications', 'Teaching', 'Students', 'Contact'],
    sectionTitles: {
      research: 'Research',
      publications: 'Selected Publications',
      teaching: 'Teaching',
      contact: 'Contact'
    },
    hero: {
      name: 'Huaian Diao',
      nameEnglish: 'Professor Huaian Diao',
      title: 'Professor, School of Mathematics, Jilin University',
      subtitle: 'Research interests include inverse problems in mathematical physics, wave scattering, spectral theory, and numerical computation.',
      welcome: 'Prospective undergraduate and graduate students are welcome to get in touch.'
    },
    research: [
      { title: 'Inverse Problems in Mathematical Physics', body: 'Developing theory and computation for recovering media, sources, and geometry from limited measurements.' },
      { title: 'Wave Scattering', body: 'Studying uniqueness, stability, and visibility questions in acoustic, elastic, and electromagnetic scattering.' },
      { title: 'Spectral Theory', body: 'Investigating transmission eigenvalues, scattering resonances, and related spectral structures.' },
      { title: 'Numerical Computation', body: 'Working on matrix computation, optimization, and numerical methods for differential equations.' }
    ],
    publications: [
      'H. Diao and H. Liu, Spectral Geometry and Inverse Scattering Theory, Springer, 2023.',
      'H. Diao, H. Liu, and Q. Meng, Dislocations with corners in an elastic body with applications to fault detection, SIAM J. Appl. Math. 85 (2025).',
      'W. Zhou, H. Diao, and H. Liu, Quasi-Minnaert resonances in high-contrast acoustic structures and applications to invisibility cloaking, J. Comput. Phys. 541 (2025).',
      'H. Diao, X. Fei, and H. Liu, On a novel unique continuation principle result and its application to inverse conductive scattering, SIAM J. Math. Anal. 57 (2025).',
      'H. Diao, R. Tang, H. Liu, and J. Tang, Unique determination by a single far-field measurement for an inverse elastic problem, Inverse Probl. Imaging 18 (2024).',
      'H. Diao, H. Li, H. Liu, and J. Tang, Spectral properties of an acoustic-elastic transmission eigenvalue problem with applications, J. Differential Equations 371 (2023).'
    ],
    teaching: {
      undergraduateTitle: 'Undergraduate Courses',
      graduateTitle: 'Graduate Courses',
      undergraduate: ['Modern Optimization Algorithms', 'Complex Analysis', 'Numerical Analysis', 'Convex Analysis', 'Numerical Methods for Differential Equations', 'Discrete Mathematics', 'Linear Algebra A'],
      graduate: ['Numerical Methods for Nonlinear Problems', 'Matrix Computation', 'Computational Optimization', 'Difference Methods for Differential Equations']
    },
    contact: {
      emailLabel: 'Email',
      email: 'diao@jlu.edu.cn',
      officeLabel: 'Office',
      office: 'Room 524, Wuzuoqun Building, Jilin University',
      phoneLabel: 'Phone',
      phone: '0431-85166214',
      facultyPageLabel: 'Faculty Profile',
      facultyPageHref: 'https://math.jlu.edu.cn/info/1782/16720.htm',
      facultyPageText: 'Jilin University faculty page'
    }
  }
};
```

```js
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
  document.querySelector('[data-contact-title]').textContent = copy.sectionTitles.contact;

  document.querySelector('[data-research-list]').innerHTML = renderCards(copy.research);
  document.querySelector('[data-publication-list]').innerHTML = renderList(copy.publications);
  document.querySelector('[data-teaching-content]').innerHTML = renderTeaching(copy);
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
```

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huaian Diao | Personal Website</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="site-header">
      <div class="site-brand">
        <span class="site-name">Huaian Diao</span>
        <span class="site-affiliation">School of Mathematics, Jilin University</span>
      </div>
      <div class="site-header-actions">
        <nav aria-label="Primary" class="site-nav">
          <a data-nav-link href="#home">首页</a>
          <a data-nav-link href="#research">研究</a>
          <a data-nav-link href="#publications">成果</a>
          <a data-nav-link href="#teaching">教学</a>
          <a data-nav-link href="#students">学生</a>
          <a data-nav-link href="#contact">联系</a>
        </nav>
        <button type="button" class="language-toggle" data-language-toggle>中文 | EN</button>
      </div>
    </header>

    <main class="page-shell">
      <section id="home" class="hero">
        <div class="hero-copy">
          <p class="hero-kicker">School of Mathematics, Jilin University</p>
          <h1 data-hero-name>刁怀安</h1>
          <p class="hero-name-english" data-hero-name-english>Huaian Diao</p>
          <p class="hero-title" data-hero-title>吉林大学数学学院教授、博士生导师</p>
          <p class="hero-subtitle" data-hero-subtitle>研究方向包括数学物理反问题、波散射、谱理论与数值计算。</p>
          <p class="hero-welcome" data-hero-welcome>欢迎对相关方向感兴趣的本科生和研究生联系交流。</p>
        </div>
      </section>

      <section id="research" class="content-section">
        <div class="section-heading">
          <h2 data-research-title>研究方向</h2>
        </div>
        <div class="card-grid" data-research-list></div>
      </section>

      <section id="publications" class="content-section">
        <div class="section-heading">
          <h2 data-publications-title>代表性成果</h2>
        </div>
        <ol class="publication-list" data-publication-list></ol>
      </section>

      <section id="teaching" class="content-section">
        <div class="section-heading">
          <h2 data-teaching-title>教学</h2>
        </div>
        <div data-teaching-content></div>
      </section>

      <section id="students" class="content-section">
        <div class="section-heading">
          <h2>Students</h2>
        </div>
      </section>

      <section id="contact" class="content-section">
        <div class="section-heading">
          <h2 data-contact-title>联系</h2>
        </div>
        <div data-contact-content></div>
      </section>
    </main>

    <script type="module" src="./script.js"></script>
  </body>
</html>
```

- [ ] **Step 4: Run the three current test files and verify they pass**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/site-shell.spec.js tests/language-toggle.spec.js tests/sections.spec.js
```

Expected:

```text
PASS tests/site-shell.spec.js
PASS tests/language-toggle.spec.js
PASS tests/sections.spec.js
3 passed
```

- [ ] **Step 5: Commit the main academic content sections**

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git add content.js script.js index.html tests/sections.spec.js
git commit -m "feat: render research publications teaching and contact"
```

## Task 4: Build the Students Section with an Honest Empty State

**Files:**
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/content.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/script.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/index.html`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/tests/students.spec.js`

- [ ] **Step 1: Write the failing students-section test**

```js
import { test, expect } from '@playwright/test';

test('renders prospective students guidance, opportunities, and an empty outcomes state', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#students')).toContainText('拟联系学生');
  await expect(page.locator('#students')).toContainText('当前机会');
  await expect(page.locator('#students')).toContainText('毕业生与学生发展');
  await expect(page.locator('#students .section-card')).toHaveCount(2);
  await expect(page.locator('#students')).toContainText('学生去向信息将在最终确认后补充。');
});
```

- [ ] **Step 2: Run the students-section test and verify it fails**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/students.spec.js
```

Expected:

```text
FAIL tests/students.spec.js
Error: expect(locator).toContainText('Prospective Students')
```

- [ ] **Step 3: Implement the Students section structure and empty-state behavior**

```js
export const siteContent = {
  zh: {
    htmlLang: 'zh-CN',
    nav: ['首页', '研究', '成果', '教学', '学生', '联系'],
    sectionTitles: {
      research: '研究方向',
      publications: '代表性成果',
      teaching: '教学',
      students: '学生',
      contact: '联系'
    },
    hero: {
      name: '刁怀安',
      nameEnglish: 'Huaian Diao',
      title: '吉林大学数学学院教授、博士生导师',
      subtitle: '研究方向包括数学物理反问题、波散射、谱理论与数值计算。',
      welcome: '欢迎对相关方向感兴趣的本科生和研究生联系交流。'
    },
    research: [
      { title: '数学物理反问题', body: '关注由有限测量恢复介质、源项和几何结构的理论与计算方法。' },
      { title: '波散射', body: '研究声学、弹性与电磁散射中的唯一性、稳定性与可见性问题。' },
      { title: '谱理论', body: '结合传输特征值、散射共振和相关谱性质开展分析。' },
      { title: '数值计算', body: '围绕矩阵计算、优化与偏微分方程数值方法开展研究。' }
    ],
    publications: [
      'H. Diao and H. Liu, Spectral Geometry and Inverse Scattering Theory, Springer, 2023.',
      'H. Diao, H. Liu, and Q. Meng, Dislocations with corners in an elastic body with applications to fault detection, SIAM J. Appl. Math. 85 (2025).',
      'W. Zhou, H. Diao, and H. Liu, Quasi-Minnaert resonances in high-contrast acoustic structures and applications to invisibility cloaking, J. Comput. Phys. 541 (2025).',
      'H. Diao, X. Fei, and H. Liu, On a novel unique continuation principle result and its application to inverse conductive scattering, SIAM J. Math. Anal. 57 (2025).',
      'H. Diao, R. Tang, H. Liu, and J. Tang, Unique determination by a single far-field measurement for an inverse elastic problem, Inverse Probl. Imaging 18 (2024).',
      'H. Diao, H. Li, H. Liu, and J. Tang, Spectral properties of an acoustic-elastic transmission eigenvalue problem with applications, J. Differential Equations 371 (2023).'
    ],
    teaching: {
      undergraduateTitle: '本科生课程',
      graduateTitle: '研究生课程',
      undergraduate: ['现代优化算法', '复变函数', '数值分析', '凸分析', '微分方程数值解', '离散数学', '线性代数A'],
      graduate: ['非线性问题数值解', '矩阵计算', '最优化计算', '微分方程差分方法']
    },
    students: {
      prospectiveTitle: '拟联系学生',
      opportunitiesTitle: '当前机会',
      outcomesTitle: '毕业生与学生发展',
      prospective: [
        '欢迎希望开展科研训练、毕业设计或继续深造的本科生联系。',
        '欢迎具有扎实数学基础并希望申请硕士或博士阶段研究的同学联系。',
        '联系时建议附上简历、成绩单以及感兴趣的研究方向。'
      ],
      opportunities: [
        '可围绕反问题、波散射、谱理论和数值计算开展本科生科研训练。',
        '欢迎对理论分析与数值方法结合感兴趣的研究生申请者交流。'
      ],
      outcomesEmptyState: '学生去向信息将在最终确认后补充。'
    },
    contact: {
      emailLabel: '电子邮箱',
      email: 'diao@jlu.edu.cn',
      officeLabel: '办公地点',
      office: '吉林大学中心校区伍卓群楼524',
      phoneLabel: '办公电话',
      phone: '0431-85166214',
      facultyPageLabel: '学院主页',
      facultyPageHref: 'https://math.jlu.edu.cn/info/1782/16720.htm',
      facultyPageText: '吉林大学数学学院教师主页'
    }
  },
  en: {
    htmlLang: 'en',
    nav: ['Home', 'Research', 'Publications', 'Teaching', 'Students', 'Contact'],
    sectionTitles: {
      research: 'Research',
      publications: 'Selected Publications',
      teaching: 'Teaching',
      students: 'Students',
      contact: 'Contact'
    },
    hero: {
      name: 'Huaian Diao',
      nameEnglish: 'Professor Huaian Diao',
      title: 'Professor, School of Mathematics, Jilin University',
      subtitle: 'Research interests include inverse problems in mathematical physics, wave scattering, spectral theory, and numerical computation.',
      welcome: 'Prospective undergraduate and graduate students are welcome to get in touch.'
    },
    research: [
      { title: 'Inverse Problems in Mathematical Physics', body: 'Developing theory and computation for recovering media, sources, and geometry from limited measurements.' },
      { title: 'Wave Scattering', body: 'Studying uniqueness, stability, and visibility questions in acoustic, elastic, and electromagnetic scattering.' },
      { title: 'Spectral Theory', body: 'Investigating transmission eigenvalues, scattering resonances, and related spectral structures.' },
      { title: 'Numerical Computation', body: 'Working on matrix computation, optimization, and numerical methods for differential equations.' }
    ],
    publications: [
      'H. Diao and H. Liu, Spectral Geometry and Inverse Scattering Theory, Springer, 2023.',
      'H. Diao, H. Liu, and Q. Meng, Dislocations with corners in an elastic body with applications to fault detection, SIAM J. Appl. Math. 85 (2025).',
      'W. Zhou, H. Diao, and H. Liu, Quasi-Minnaert resonances in high-contrast acoustic structures and applications to invisibility cloaking, J. Comput. Phys. 541 (2025).',
      'H. Diao, X. Fei, and H. Liu, On a novel unique continuation principle result and its application to inverse conductive scattering, SIAM J. Math. Anal. 57 (2025).',
      'H. Diao, R. Tang, H. Liu, and J. Tang, Unique determination by a single far-field measurement for an inverse elastic problem, Inverse Probl. Imaging 18 (2024).',
      'H. Diao, H. Li, H. Liu, and J. Tang, Spectral properties of an acoustic-elastic transmission eigenvalue problem with applications, J. Differential Equations 371 (2023).'
    ],
    teaching: {
      undergraduateTitle: 'Undergraduate Courses',
      graduateTitle: 'Graduate Courses',
      undergraduate: ['Modern Optimization Algorithms', 'Complex Analysis', 'Numerical Analysis', 'Convex Analysis', 'Numerical Methods for Differential Equations', 'Discrete Mathematics', 'Linear Algebra A'],
      graduate: ['Numerical Methods for Nonlinear Problems', 'Matrix Computation', 'Computational Optimization', 'Difference Methods for Differential Equations']
    },
    students: {
      prospectiveTitle: 'Prospective Students',
      opportunitiesTitle: 'Current Opportunities',
      outcomesTitle: 'Alumni / Student Outcomes',
      prospective: [
        'Undergraduates interested in research training, graduation projects, or future graduate study are welcome to reach out.',
        'Master’s and PhD applicants with strong mathematical foundations are encouraged to get in touch.',
        'Please include a CV, transcript, and a short note about your research interests in the first email.'
      ],
      opportunities: [
        'Potential topics include inverse problems, wave scattering, spectral theory, and numerical computation.',
        'Students interested in combining rigorous analysis with computational methods are especially welcome.'
      ],
      outcomesEmptyState: 'Student outcome records will be added after final confirmation.'
    },
    contact: {
      emailLabel: 'Email',
      email: 'diao@jlu.edu.cn',
      officeLabel: 'Office',
      office: 'Room 524, Wuzuoqun Building, Jilin University',
      phoneLabel: 'Phone',
      phone: '0431-85166214',
      facultyPageLabel: 'Faculty Profile',
      facultyPageHref: 'https://math.jlu.edu.cn/info/1782/16720.htm',
      facultyPageText: 'Jilin University faculty page'
    }
  }
};
```

```js
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
```

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Huaian Diao | Personal Website</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="site-header">
      <div class="site-brand">
        <span class="site-name">Huaian Diao</span>
        <span class="site-affiliation">School of Mathematics, Jilin University</span>
      </div>
      <div class="site-header-actions">
        <nav aria-label="Primary" class="site-nav">
          <a data-nav-link href="#home">首页</a>
          <a data-nav-link href="#research">研究</a>
          <a data-nav-link href="#publications">成果</a>
          <a data-nav-link href="#teaching">教学</a>
          <a data-nav-link href="#students">学生</a>
          <a data-nav-link href="#contact">联系</a>
        </nav>
        <button type="button" class="language-toggle" data-language-toggle>中文 | EN</button>
      </div>
    </header>

    <main class="page-shell">
      <section id="home" class="hero">
        <div class="hero-copy">
          <p class="hero-kicker">School of Mathematics, Jilin University</p>
          <h1 data-hero-name>刁怀安</h1>
          <p class="hero-name-english" data-hero-name-english>Huaian Diao</p>
          <p class="hero-title" data-hero-title>吉林大学数学学院教授、博士生导师</p>
          <p class="hero-subtitle" data-hero-subtitle>研究方向包括数学物理反问题、波散射、谱理论与数值计算。</p>
          <p class="hero-welcome" data-hero-welcome>欢迎对相关方向感兴趣的本科生和研究生联系交流。</p>
        </div>
      </section>

      <section id="research" class="content-section">
        <div class="section-heading">
          <h2 data-research-title>研究方向</h2>
        </div>
        <div class="card-grid" data-research-list></div>
      </section>

      <section id="publications" class="content-section">
        <div class="section-heading">
          <h2 data-publications-title>代表性成果</h2>
        </div>
        <ol class="publication-list" data-publication-list></ol>
      </section>

      <section id="teaching" class="content-section">
        <div class="section-heading">
          <h2 data-teaching-title>教学</h2>
        </div>
        <div data-teaching-content></div>
      </section>

      <section id="students" class="content-section">
        <div class="section-heading">
          <h2 data-students-title>学生</h2>
        </div>
        <div data-students-content></div>
      </section>

      <section id="contact" class="content-section">
        <div class="section-heading">
          <h2 data-contact-title>联系</h2>
        </div>
        <div data-contact-content></div>
      </section>
    </main>

    <script type="module" src="./script.js"></script>
  </body>
</html>
```

- [ ] **Step 4: Run the current test suite and verify the students test passes**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/site-shell.spec.js tests/language-toggle.spec.js tests/sections.spec.js tests/students.spec.js
```

Expected:

```text
PASS tests/site-shell.spec.js
PASS tests/language-toggle.spec.js
PASS tests/sections.spec.js
PASS tests/students.spec.js
4 passed
```

- [ ] **Step 5: Commit the Students section scaffold**

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git add content.js script.js index.html tests/students.spec.js
git commit -m "feat: add student guidance and outcomes scaffold"
```

## Task 5: Replace the Empty Outcomes State with Real Student Records and Add the Headshot

**Execution gate:** Do not start this task until the user has provided a headshot and approved student-outcome records for publication.

**Files:**
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/content.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/script.js`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/index.html`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/assets/profile-photo.jpg` or `/Users/huaian/Sites/diaohuaian.github.io/assets/profile-photo.png`
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/tests/students.spec.js`

- [ ] **Step 1: Extend the students test so it fails until real data is present**

```js
import { test, expect } from '@playwright/test';

test('renders prospective students guidance, opportunities, and a populated outcomes table', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '中文 | EN' }).click();

  await expect(page.locator('[data-profile-image]')).toBeVisible();
  const rowCount = await page.locator('[data-student-outcome-row]').count();
  expect(rowCount).toBeGreaterThanOrEqual(3);
  await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Training Level' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Graduation Year' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: 'Destination / Current Position' })).toBeVisible();
});
```

- [ ] **Step 2: Run the students test and verify it fails because the outcomes table is still empty**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/students.spec.js
```

Expected:

```text
FAIL tests/students.spec.js
Error: expect(locator).toHaveCount(3)
```

- [ ] **Step 3: Integrate the approved headshot and student records**

Save the user-provided headshot to:

```text
/Users/huaian/Sites/diaohuaian.github.io/assets/profile-photo.jpg
```

Replace the Students content shape in both the `zh` and `en` blocks of `content.js` with real data using this exact structure:

```js
students: {
  prospectiveTitle: 'Prospective Students',
  opportunitiesTitle: 'Current Opportunities',
  outcomesTitle: 'Alumni / Student Outcomes',
  tableHeaders: ['Name', 'Training Level', 'Graduation Year', 'Destination / Current Position'],
  prospective: [
    'Undergraduates interested in research training, graduation projects, or future graduate study are welcome to reach out.',
    'Master’s and PhD applicants with strong mathematical foundations are encouraged to get in touch.',
    'Please include a CV, transcript, and a short note about your research interests in the first email.'
  ],
  opportunities: [
    'Potential topics include inverse problems, wave scattering, spectral theory, and numerical computation.',
    'Students interested in combining rigorous analysis with computational methods are especially welcome.'
  ],
  outcomes: [
    {
      name: 'Use the first approved student name here',
      trainingLevel: 'Undergraduate / Master / PhD',
      graduationYear: 'YYYY',
      destination: 'Approved destination or current employer'
    },
    {
      name: 'Use the second approved student name here',
      trainingLevel: 'Undergraduate / Master / PhD',
      graduationYear: 'YYYY',
      destination: 'Approved destination or current employer'
    },
    {
      name: 'Use the third approved student name here',
      trainingLevel: 'Undergraduate / Master / PhD',
      graduationYear: 'YYYY',
      destination: 'Approved destination or current employer'
    }
  ]
}
```

Update the hero markup in `index.html` to include the real image target:

```html
<section id="home" class="hero">
  <div class="hero-copy">
    <p class="hero-kicker">School of Mathematics, Jilin University</p>
    <h1 data-hero-name>刁怀安</h1>
    <p class="hero-name-english" data-hero-name-english>Huaian Diao</p>
    <p class="hero-title" data-hero-title>吉林大学数学学院教授、博士生导师</p>
    <p class="hero-subtitle" data-hero-subtitle>研究方向包括数学物理反问题、波散射、谱理论与数值计算。</p>
    <p class="hero-welcome" data-hero-welcome>欢迎对相关方向感兴趣的本科生和研究生联系交流。</p>
  </div>
  <div class="hero-media">
    <img
      data-profile-image
      class="profile-image"
      src="./assets/profile-photo.jpg"
      alt="Portrait of Professor Huaian Diao"
    >
  </div>
</section>
```

Update `script.js` so the outcomes area renders a table when `copy.students.outcomes` exists:

```js
function renderOutcomeRows(items) {
  return items
    .map(
      (item) => `
        <tr data-student-outcome-row>
          <td>${item.name}</td>
          <td>${item.trainingLevel}</td>
          <td>${item.graduationYear}</td>
          <td>${item.destination}</td>
        </tr>
      `
    )
    .join('');
}

function renderStudentSection(copy) {
  const outcomes = copy.students.outcomes;

  if (outcomes && outcomes.length > 0) {
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
        <table class="outcomes-table">
          <thead>
            <tr>
              ${copy.students.tableHeaders.map((label) => `<th scope="col">${label}</th>`).join('')}
            </tr>
          </thead>
          <tbody>${renderOutcomeRows(outcomes)}</tbody>
        </table>
      </div>
    `;
  }

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
```

- [ ] **Step 4: Run the students test again and verify it passes with the real records**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/students.spec.js
```

Expected:

```text
PASS tests/students.spec.js
1 passed
```

- [ ] **Step 5: Commit the real student records and profile image**

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git add assets/profile-photo.jpg content.js script.js index.html tests/students.spec.js
git commit -m "feat: add profile photo and student outcomes"
```

## Task 6: Polish Responsive Layout, Finish Styling, and Add Maintenance Notes

**Files:**
- Modify: `/Users/huaian/Sites/diaohuaian.github.io/style.css`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/tests/responsive.spec.js`
- Create: `/Users/huaian/Sites/diaohuaian.github.io/README.md`

- [ ] **Step 1: Write the failing responsive-layout test**

```js
import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test('fits within a mobile viewport and keeps navigation usable', async ({ page }) => {
  await page.goto('/');

  const hasHorizontalOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth;
  });

  expect(hasHorizontalOverflow).toBe(false);
  await expect(page.getByRole('button', { name: '中文 | EN' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Students|学生/ })).toBeVisible();
});
```

- [ ] **Step 2: Run the responsive-layout test and verify it fails if the layout overflows on mobile**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e -- tests/responsive.spec.js
```

Expected:

```text
FAIL tests/responsive.spec.js
Expected: false
Received: true
```

- [ ] **Step 3: Finish the production styling and add the maintenance README**

```css
:root {
  color-scheme: light;
  font-family: "Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  --bg: #f5f7fb;
  --surface: #ffffff;
  --surface-alt: #eef3fb;
  --text: #18212f;
  --muted: #516078;
  --border: #d8deea;
  --accent: #204f8c;
  --accent-soft: #dce9fb;
  --shadow: 0 18px 40px rgba(25, 41, 69, 0.08);
  --content-width: min(1120px, calc(100vw - 2rem));
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
}

a {
  color: var(--accent);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  padding: 1rem max(1rem, calc((100vw - var(--content-width)) / 2));
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.site-brand {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.site-name {
  font-size: 1.125rem;
  font-weight: 700;
}

.site-affiliation {
  color: var(--muted);
  font-size: 0.95rem;
}

.site-header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.85rem 1rem;
}

.site-nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
}

.language-toggle {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  border-radius: 999px;
  padding: 0.6rem 0.95rem;
  font: inherit;
  cursor: pointer;
}

.page-shell {
  width: var(--content-width);
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(280px, 1fr);
  gap: 2rem;
  align-items: center;
  padding: 2rem 0 3rem;
}

.hero-copy,
.hero-media,
.section-card,
.student-outcomes,
.publication-list,
.contact-grid,
.teaching-grid,
.card-grid,
.students-grid {
  min-width: 0;
}

.hero-kicker {
  margin: 0 0 0.75rem;
  color: var(--accent);
  font-weight: 700;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.05;
}

.hero-name-english,
.hero-title,
.hero-subtitle,
.hero-welcome {
  margin: 0.75rem 0 0;
}

.hero-name-english {
  color: var(--muted);
  font-size: 1.125rem;
}

.hero-title {
  font-size: 1.125rem;
  font-weight: 700;
}

.hero-subtitle,
.hero-welcome {
  color: var(--muted);
  max-width: 62ch;
}

.hero-media {
  display: flex;
  justify-content: center;
}

.profile-image {
  width: min(100%, 360px);
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  background: var(--surface);
}

.content-section {
  padding: 1.5rem 0 0;
}

.section-heading h2 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}

.card-grid,
.students-grid,
.contact-grid,
.teaching-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.section-card,
.publication-list,
.student-outcomes {
  padding: 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.section-card h3,
.student-outcomes h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.section-card p,
.section-card li,
.student-outcomes p,
.publication-list li {
  color: var(--muted);
  line-height: 1.65;
}

.publication-list {
  padding-left: 2.25rem;
}

.student-outcomes {
  margin-top: 1rem;
  overflow-x: auto;
}

.outcomes-table {
  width: 100%;
  border-collapse: collapse;
}

.outcomes-table th,
.outcomes-table td {
  padding: 0.85rem 0.75rem;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}

.outcomes-table th {
  color: var(--text);
  background: var(--surface-alt);
}

@media (max-width: 900px) {
  .site-header,
  .site-header-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero,
  .card-grid,
  .students-grid,
  .contact-grid,
  .teaching-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .site-header {
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }

  .page-shell {
    width: min(100vw - 1rem, 1120px);
    padding-top: 1rem;
  }

  .hero h1 {
    font-size: 2.2rem;
  }
}
```

```md
# diaohuaian.github.io

Personal academic website for Professor Huaian Diao.

## Local preview

```bash
npm install
npx playwright install
npm run serve
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Test

```bash
npm run test:e2e
```

## Content updates

- Edit bilingual copy in `content.js`.
- Replace the profile photo in `assets/profile-photo.jpg`.
- Update styling in `style.css`.

## Publish

1. Create the GitHub repository `diaohuaian.github.io` under the `diaohuaian` account.
2. Add the remote:

```bash
git remote add origin git@github.com:diaohuaian/diaohuaian.github.io.git
```

3. Push the main branch:

```bash
git push -u origin main
```

4. Verify the site at `https://diaohuaian.github.io/`.
```

- [ ] **Step 4: Run the full browser suite and verify it passes**

Run:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
npm run test:e2e
```

Expected:

```text
PASS tests/site-shell.spec.js
PASS tests/language-toggle.spec.js
PASS tests/sections.spec.js
PASS tests/students.spec.js
PASS tests/responsive.spec.js
5 passed
```

- [ ] **Step 5: Commit the polished layout and maintenance notes**

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git add style.css tests/responsive.spec.js README.md
git commit -m "feat: polish responsive layout and maintenance docs"
```

## Release Steps

- Create the GitHub repository `diaohuaian.github.io` under the `diaohuaian` account if it does not already exist.
- Add the GitHub remote:

```bash
cd /Users/huaian/Sites/diaohuaian.github.io
git remote add origin git@github.com:diaohuaian/diaohuaian.github.io.git
```

- Push the branch:

```bash
git push -u origin main
```

- Verify GitHub Pages serves the site from:

```text
https://diaohuaian.github.io/
```

- If GitHub Pages does not activate automatically, open the repository settings and confirm that Pages is publishing from the `main` branch root. GitHub’s official Pages quickstart documents the `username.github.io` repository convention.
