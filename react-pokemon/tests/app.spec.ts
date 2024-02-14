import { test, expect } from '@playwright/test';

test('should have title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1, name: 'Pokemon' })).toBeVisible();
});
