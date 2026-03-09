import { test, expect } from '@playwright/test';
import { ConversationListPage } from './pages/conversation-list.page';
import { ChatActionsPage } from './pages/chat-actions.page';

// Requires the docker stack to be running: make docker
// Frontend: http://localhost:5173  →  Mock server: http://localhost:3002
//
// The three-dot (⋮) button is always visible — no chatActions prop is configured
// in the dev stack, so the panel shows contact info only (no action buttons).

test.describe('Chat actions panel', () => {
  let chatList: ConversationListPage;
  let chatActions: ChatActionsPage;

  test.beforeEach(async ({ page }) => {
    chatList = new ConversationListPage(page);
    chatActions = new ChatActionsPage(page);
    await page.goto('/');
    await chatList.waitForLoaded();
  });

  test('shows the three-dot button on every chat item', async () => {
    await expect(chatList.chatMenuTrigger('Ana Beatriz')).toBeVisible();
    await expect(chatList.chatMenuTrigger('Carlos Eduardo')).toBeVisible();
    await expect(chatList.chatMenuTrigger('Equipe Vendas 🚀')).toBeVisible();
  });

  test('opens contact panel when clicking the three-dot button', async () => {
    await chatList.openChatMenu('Ana Beatriz');
    await chatActions.waitForOpen();

    await expect(chatActions.panel).toBeVisible();
  });

  test('panel shows the contact name', async () => {
    await chatList.openChatMenu('Ana Beatriz');
    await chatActions.waitForOpen();

    await expect(chatActions.contactName).toContainText('Ana Beatriz');
  });

  test('panel shows the phone number', async () => {
    await chatList.openChatMenu('Ana Beatriz');
    await chatActions.waitForOpen();

    // contactName is set, so the phone number row is rendered separately
    await expect(chatActions.phoneNumber).toBeVisible();
  });

  test('panel shows contact name for group chat', async () => {
    await chatList.openChatMenu('Equipe Vendas 🚀');
    await chatActions.waitForOpen();

    await expect(chatActions.contactName).toContainText('Equipe Vendas');
  });

  test('closes panel when clicking the X button', async () => {
    await chatList.openChatMenu('Ana Beatriz');
    await chatActions.waitForOpen();

    await chatActions.close();
    await chatActions.waitForClosed();
  });

  test('closes panel when clicking the backdrop', async () => {
    await chatList.openChatMenu('Ana Beatriz');
    await chatActions.waitForOpen();

    await chatActions.clickBackdrop();
    await chatActions.waitForClosed();
  });

  test('clicking menu button does not open the message thread', async ({ page }) => {
    await chatList.openChatMenu('Ana Beatriz');
    await chatActions.waitForOpen();

    // The message thread should NOT be open — the click was on the menu, not the chat row
    const thread = page.locator('[data-testid="message-thread"]');
    await expect(thread).not.toBeVisible();
  });
});
