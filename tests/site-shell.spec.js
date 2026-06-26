import { test, expect } from '@playwright/test';

test('renders the site shell with anchor navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Huaian Diao/);
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  await expect(page.locator('[data-profile-image]')).toBeVisible();
  await expect(page.locator('[data-profile-image]')).toHaveAttribute('src', './assets/profile-photo.png');
  await expect(page.locator('nav[aria-label="Primary"] a')).toHaveCount(6);
  await expect(page.locator('nav[aria-label="Primary"] a').nth(0)).toHaveAttribute('href', '#home');
  await expect(page.locator('nav[aria-label="Primary"] a').nth(1)).toHaveAttribute('href', '#research');
  await expect(page.locator('nav[aria-label="Primary"] a').nth(2)).toHaveAttribute('href', '#publications');
  await expect(page.locator('nav[aria-label="Primary"] a').nth(3)).toHaveAttribute('href', '#teaching');
  await expect(page.locator('nav[aria-label="Primary"] a').nth(4)).toHaveAttribute('href', '#students');
  await expect(page.locator('nav[aria-label="Primary"] a').nth(5)).toHaveAttribute('href', '#contact');
});
