import { test, expect } from '@playwright/test';

test.describe('i18n translations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/i18n-test.html');
    // Wait for components to mount and render
    await page.waitForTimeout(3000);
  });

  test('default English translations render correctly', async ({ page }) => {
    const defaultMount = page.locator('#default-mount');

    // Check the main heading "WhatsApp Inbox" in the empty state
    await expect(defaultMount.getByText('WhatsApp Inbox')).toBeVisible();

    // Check the empty state description
    await expect(
      defaultMount.getByText('Send and receive messages. Select a conversation from the sidebar to get started.')
    ).toBeVisible();

    // Check "Chats" heading in conversation list
    await expect(defaultMount.getByText('Chats', { exact: true })).toBeVisible();

    // Check search placeholder
    await expect(defaultMount.getByPlaceholder('Search or start new chat')).toBeVisible();

    // Check empty state in conversation list
    await expect(defaultMount.getByText('No conversations yet')).toBeVisible();
  });

  test('custom translations override defaults', async ({ page }) => {
    const customMount = page.locator('#custom-mount');

    // Custom Spanish translations should appear
    await expect(customMount.getByText('Bandeja WhatsApp')).toBeVisible();
    await expect(
      customMount.getByText('Envía y recibe mensajes. Selecciona una conversación de la barra lateral para empezar.')
    ).toBeVisible();
    await expect(customMount.getByRole('heading', { name: 'Conversaciones' })).toBeVisible();
    await expect(customMount.getByPlaceholder('Buscar o iniciar nuevo chat')).toBeVisible();
    await expect(customMount.getByText('Sin conversaciones aún')).toBeVisible();

    // Should NOT have English defaults for overridden keys
    await expect(customMount.getByText('WhatsApp Inbox')).not.toBeVisible();
    await expect(customMount.getByText('Chats', { exact: true })).not.toBeVisible();
  });

  test('partial translations fall back to English for missing keys', async ({ page }) => {
    const partialMount = page.locator('#partial-mount');

    // Custom key should be translated
    await expect(partialMount.getByText('Chats Personalizados')).toBeVisible();

    // Non-overridden keys should fall back to English
    await expect(partialMount.getByText('WhatsApp Inbox')).toBeVisible();
    await expect(
      partialMount.getByText('Send and receive messages. Select a conversation from the sidebar to get started.')
    ).toBeVisible();
    await expect(partialMount.getByPlaceholder('Search or start new chat')).toBeVisible();
    await expect(partialMount.getByText('No conversations yet')).toBeVisible();
  });
});
