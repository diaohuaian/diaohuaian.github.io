# Diaohuaian Personal Website Design

Date: 2026-06-22
Project path: `/Users/huaian/Sites/diaohuaian.github.io`
Planned GitHub Pages repository: `diaohuaian/diaohuaian.github.io`
Planned site URL: `https://diaohuaian.github.io/`

## 1. Summary

This project will create a bilingual personal academic website for Professor Huaian Diao at the School of Mathematics, Jilin University. The site should present a strong research profile while also helping prospective undergraduate and graduate students understand Professor Diao's research areas, teaching, mentoring opportunities, and student outcomes.

The site is not a copy of the existing Jilin University faculty profile page. It should keep the academic credibility of that page while improving clarity, approachability, and student conversion.

## 2. Primary Goals

1. Present Professor Diao as an active researcher with a clear academic identity.
2. Attract both undergraduate students and graduate applicants.
3. Make it easy for visitors to understand research directions and decide whether to get in touch.
4. Highlight student development by showing alumni destinations and career outcomes.
5. Keep the site simple to maintain so content can be updated without a heavy toolchain.

## 3. Audience

Primary audiences:

- Undergraduate students interested in research training, graduation projects, or future graduate study.
- Prospective master's and PhD students considering Professor Diao as a supervisor.

Secondary audiences:

- Academic collaborators.
- Colleagues and external visitors who want a concise professional profile.

## 4. Positioning

The website should feel academically serious, calm, and trustworthy. The tone should be balanced rather than aggressively promotional:

- Research strength should be visible immediately.
- Invitations to students should be clear but measured.
- Student outcomes should support credibility through evidence rather than sales language.

## 5. Information Architecture

Top-level navigation:

- `Home`
- `Research`
- `Publications`
- `Teaching`
- `Students`
- `Contact`

Language switch:

- `中文 | EN`
- One shared site with a client-side language toggle, not two separate sites.

## 6. Page Design

### Home

Purpose:

- Establish identity, affiliation, and research profile.
- Give both undergraduate and graduate students a clear reason to continue reading.

Required content:

- Professional headshot.
- Name in Chinese and English: `刁怀安 / Huaian Diao`.
- Title and affiliation: Professor, School of Mathematics, Jilin University.
- Short bilingual introduction.
- Research keywords: inverse problems in mathematical physics, wave scattering, spectral theory, numerical algebra / numerical computation.
- A brief welcome line for students interested in related areas.
- Short preview cards or links to research, publications, students, and contact.

### Research

Purpose:

- Explain the main research directions in a way that is legible to strong students as well as academic visitors.

Required content:

- Research areas from the existing faculty page.
- Short explanatory text for each area.
- Optional current themes or open problems if content is available.

### Publications

Purpose:

- Provide evidence of research quality without forcing users to parse a dense faculty record page.

Required content:

- Selected publications first.
- Option to include a fuller publication list afterward.
- Books, representative journal papers, and major recent work should be visible.
- Publication entries should remain easy to scan.

### Teaching

Purpose:

- Show teaching breadth and make the site useful to current and prospective students.

Required content:

- Undergraduate courses.
- Graduate courses.
- Optional short note on teaching philosophy if desired later.

### Students

Purpose:

- Serve as the main conversion page for prospective students.
- Distinguish this site from the standard university profile.

Required subsections:

#### Prospective Students

- Who is welcome to contact Professor Diao.
- Suitable backgrounds and interests.
- Expected preparation, such as analysis, linear algebra, differential equations, numerical analysis, and some programming maturity.
- Practical contact guidance, including what to include in an email.

#### Current Opportunities

- Research training opportunities for undergraduates.
- Topics suitable for graduation projects or early-stage research exposure.
- Entry points for graduate students.

#### Alumni / Student Outcomes

- A standalone section, not a footnote.
- Structured display of former students and their later destinations.
- Recommended fields:
  - Name
  - Training level
  - Graduation year
  - Next destination or current employer

Presentation note:

- This content should be factual, restrained, and easy to update.
- Public information should be used with appropriate permission where needed.

### Contact

Purpose:

- Make outreach straightforward.

Required content:

- Email address.
- Office location.
- Office phone if desired.
- Link to the Jilin University faculty page.
- Optional CV download link later.

## 7. Visual Direction

- Clean academic design, not a marketing landing page.
- Generous whitespace, simple typography, restrained color palette.
- Clear section hierarchy and easy scanning on desktop and mobile.
- Professional photo and content-first layout.
- No decorative hero graphics, gimmicky animation, or heavy visual clutter.

## 8. Technical Approach

Recommended implementation:

- Static site using plain HTML, CSS, and minimal JavaScript.

Planned initial file structure:

- `index.html`
- `style.css`
- `script.js`
- `assets/`

Rationale:

- Lowest maintenance burden.
- Easy GitHub Pages deployment.
- Easy future editing for publications, students, and contact details.
- No framework overhead for a relatively stable content site.

## 9. Content Sources

Initial content will be adapted from:

- The existing Jilin University Mathematics faculty profile for Professor Diao.
- User-provided updates for student supervision, alumni destinations, and any new materials.

The existing faculty page provides:

- Basic profile data.
- Research directions.
- Course list.
- Education and work history.
- Research projects.
- Representative publications.

## 10. Success Criteria

The initial version is successful if:

1. The site clearly introduces Professor Diao and his research in both Chinese and English.
2. A student can quickly identify whether the research areas fit their interests.
3. The `Students` section clearly explains who should reach out and shows concrete alumni outcomes.
4. The site works cleanly on desktop and mobile.
5. The site is structured for deployment to GitHub Pages at `diaohuaian.github.io`.

## 11. Non-Goals for the First Version

- No blog system.
- No CMS or database.
- No complex backend.
- No separate multi-page routing system unless the content volume later makes it necessary.
- No attempt to reproduce the full university site structure.

## 12. Content Still Needed From the User

Before implementation can be completed well, the following content will be needed:

- A preferred professional headshot.
- Final bilingual short bio.
- Any preferred wording for inviting students.
- Alumni and student outcome data.
- Any updates beyond the current university faculty page.

## 13. Implementation Notes

- The repository name should be `diaohuaian.github.io` because the connected GitHub username is `diaohuaian`.
- The first version should focus on a polished single-page experience with anchored sections unless content volume clearly requires separate pages.
- The `Students` section should be designed so it can grow over time without forcing a full redesign.
