import { test, expect } from '@playwright/test';

test.describe('Media messages', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/media-message-test.html');
    // Wait for mount and initial API calls
    await page.waitForTimeout(2000);

    // Click on the chat to open the message view
    await page.getByText('Test Contact').click();

    // Wait for messages and media to load
    await page.waitForTimeout(4000);
  });

  test('image message renders an img element, not "Media unavailable"', async ({ page }) => {
    // The image should render as an <img> tag (alt uses caption when available)
    const img = page.locator('img[alt="Test image caption"]');
    await expect(img).toBeVisible({ timeout: 10000 });

    // The img src should be a blob: URL (from the mocked base64 response)
    const src = await img.getAttribute('src');
    expect(src).toMatch(/^blob:/);
  });

  test('image caption is displayed alongside the image', async ({ page }) => {
    await expect(page.getByText('Test image caption')).toBeVisible({ timeout: 10000 });
    await expect(page.getByText('Second photo')).toBeVisible({ timeout: 10000 });
  });

  test('document message renders a download link with blob URL', async ({ page }) => {
    const docLink = page.getByRole('link', { name: 'report.pdf' });
    await expect(docLink).toBeVisible({ timeout: 10000 });

    // The link href should be a blob: URL, not "#"
    const href = await docLink.getAttribute('href');
    expect(href).toMatch(/^blob:/);
  });

  test('no media message shows "Media unavailable"', async ({ page }) => {
    // With valid mock API responses, zero messages should display "Media unavailable"
    const unavailable = page.getByText('Media unavailable');
    const count = await unavailable.count();
    expect(count, `Found ${count} "Media unavailable" — all media should load from mocked API`).toBe(0);
  });
});
