import { test, expect } from '@playwright/test';
import { ConversationListPage } from './pages/conversation-list.page';
import { MessageThreadPage } from './pages/message-thread.page';

// Mock device 1 has 3 prebuilt messages (greeting, followup, closing).
// Mock device 2 has no prebuilt messages.
// See devices.json for the fixture data.

test.describe('Pre-built messages', () => {
  let chatList: ConversationListPage;
  let thread: MessageThreadPage;

  test.beforeEach(async ({ page }) => {
    chatList = new ConversationListPage(page);
    thread = new MessageThreadPage(page);
    await page.goto('/');
    await chatList.waitForLoaded();
    await chatList.clickChat('Ana Beatriz'); // mock-device-1
    await thread.waitForLoaded();
  });

  test('button is visible when prebuilt messages are configured', async () => {
    await expect(thread.prebuiltMessagesButton).toBeVisible();
  });

  test('clicking button opens the dialog', async () => {
    await thread.openPrebuiltMessages();
    await expect(thread.prebuiltMessagesDialog).toBeVisible();
  });

  test('dialog shows all configured prebuilt messages', async () => {
    await thread.openPrebuiltMessages();
    await expect(thread.prebuiltMessagesDialog).toBeVisible();

    // All 3 messages from devices.json mock-device-1 should appear
    await expect(thread.prebuiltMessageItem('greeting')).toBeVisible();
    await expect(thread.prebuiltMessageItem('followup')).toBeVisible();
    await expect(thread.prebuiltMessageItem('closing')).toBeVisible();
    await expect(thread.allPrebuiltMessageItems()).toHaveCount(3);
  });

  test('selecting a prebuilt message fills the input and closes the dialog', async () => {
    await thread.openPrebuiltMessages();
    await expect(thread.prebuiltMessagesDialog).toBeVisible();

    await thread.prebuiltMessageItem('greeting').click();

    await expect(thread.prebuiltMessagesDialog).not.toBeVisible();
    await expect(thread.messageInput).toHaveValue('Hello! How can I help you today?');
  });

  test('selecting a different message also works', async () => {
    await thread.openPrebuiltMessages();
    await thread.prebuiltMessageItem('closing').click();

    await expect(thread.messageInput).toHaveValue('Thank you for your time! Have a great day.');
  });

  test('dialog can be dismissed without selecting a message', async () => {
    await thread.openPrebuiltMessages();
    await expect(thread.prebuiltMessagesDialog).toBeVisible();

    await thread.page.keyboard.press('Escape');
    await expect(thread.prebuiltMessagesDialog).not.toBeVisible();
    await expect(thread.messageInput).toHaveValue('');
  });

  test('search filters the visible messages', async () => {
    await thread.openPrebuiltMessages();
    await expect(thread.prebuiltMessagesDialog).toBeVisible();

    const searchInput = thread.page.locator('[data-testid="prebuilt-messages-search"]');
    await searchInput.fill('Greeting');

    await expect(thread.prebuiltMessageItem('greeting')).toBeVisible();
    await expect(thread.prebuiltMessageItem('followup')).not.toBeVisible();
    await expect(thread.prebuiltMessageItem('closing')).not.toBeVisible();
  });
});
