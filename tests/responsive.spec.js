import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test('stacks the header layout on mobile and keeps navigation usable', async ({ page }) => {
  await page.goto('/');

  const headerFlexDirection = await page.locator('.site-header').evaluate((node) => {
    return window.getComputedStyle(node).flexDirection;
  });

  expect(headerFlexDirection).toBe('column');
  await expect(page.getByRole('button', { name: '中文 | EN' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Students|学生/ })).toBeVisible();
});
