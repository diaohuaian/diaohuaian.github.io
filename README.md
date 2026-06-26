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

If Playwright browser downloads are unavailable but Google Chrome is already installed locally, run:

```bash
PLAYWRIGHT_BROWSER_CHANNEL=chrome npm run test:e2e
```

## Content updates

- Edit bilingual copy in `content.js`.
- Replace the profile photo in `assets/profile-photo.png`.
- Update styling in `style.css`.

## Publish

1. Create the GitHub repository `diaohuaian.github.io` under the `diaohuaian` account.
2. Add the remote:

```bash
git remote add origin git@github.com:diaohuaian/diaohuaian.github.io.git
```

3. Push the `main` branch:

```bash
git push -u origin main
```

4. Verify the site at `https://diaohuaian.github.io/`.
