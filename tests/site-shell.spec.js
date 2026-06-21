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
