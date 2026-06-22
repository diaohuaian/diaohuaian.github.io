import { test, expect } from '@playwright/test';

test('renders research, selected publications, teaching, and contact content in Chinese', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#research .section-card')).toHaveCount(4);
  await expect(page.locator('#publications li')).toHaveCount(48);
  await expect(page.locator('#publications a')).toHaveCount(48);
  await expect(page.locator('#publications a').first()).toHaveAttribute('href', 'https://doi.org/10.1007/978-3-031-34615-6');
  await expect(page.getByRole('heading', { name: '本科生课程' })).toBeVisible();
  await expect(page.getByRole('heading', { name: '研究生课程' })).toBeVisible();
  await expect(page.getByText('diao@jlu.edu.cn')).toBeVisible();
  await expect(page.getByText('伍卓群楼524')).toBeVisible();
});
