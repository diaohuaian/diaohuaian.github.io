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
