import { test, expect } from '@playwright/test';

test('renders prospective students guidance, opportunities, and a populated outcomes table', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#students')).toContainText('拟联系学生');
  await expect(page.locator('#students')).toContainText('当前机会');
  await expect(page.locator('#students')).toContainText('毕业生与学生发展');
  await expect(page.locator('#students .section-card')).toHaveCount(2);
  await expect(page.locator('[data-student-outcome-row]')).toHaveCount(3);
  await expect(page.getByRole('columnheader', { name: '姓名' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: '培养层次' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: '培养时间' })).toBeVisible();
  await expect(page.getByRole('columnheader', { name: '毕业去向' })).toBeVisible();
  await expect(page.locator('#students')).toContainText('孟庆乐');
  await expect(page.locator('#students')).toContainText('费晓旭');
  await expect(page.locator('#students')).toContainText('王丽');
  await expect(page.locator('#students')).not.toContainText('学生去向信息将在最终确认后补充。');
});
