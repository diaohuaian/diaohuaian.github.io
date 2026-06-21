import { test, expect } from '@playwright/test';

test('renders prospective students guidance, opportunities, and an empty outcomes state', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#students')).toContainText('拟联系学生');
  await expect(page.locator('#students')).toContainText('当前机会');
  await expect(page.locator('#students')).toContainText('毕业生与学生发展');
  await expect(page.locator('#students .section-card')).toHaveCount(2);
  await expect(page.locator('#students')).toContainText('学生去向信息将在最终确认后补充。');
});
