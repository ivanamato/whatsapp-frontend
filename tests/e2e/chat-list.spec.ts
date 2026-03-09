import { test, expect } from '@playwright/test';
import { ConversationListPage } from './pages/conversation-list.page';

// Requires the docker stack to be running: make docker
// Frontend: http://localhost:5173  →  Mock server: http://localhost:3002
//
// Fixture data comes from mock-server/fixtures.ts (MOCK1 instance)

test.describe('Conversation list', () => {
  let chatList: ConversationListPage;

  test.beforeEach(async ({ page }) => {
    chatList = new ConversationListPage(page);
    await page.goto('/');
    await chatList.waitForLoaded();
  });

  test('shows all MOCK1 conversations', async () => {
    await expect(chatList.chatItem('Ana Beatriz')).toBeVisible();
    await expect(chatList.chatItem('Carlos Eduardo')).toBeVisible();
    await expect(chatList.chatItem('Equipe Vendas 🚀')).toBeVisible();
    await expect(chatList.chatItem('Fernanda Lima')).toBeVisible();
    await expect(chatList.chatItem('Roberto Mendes')).toBeVisible();
  });

  test('filters conversations by search query', async () => {
    await chatList.search('Ana');

    await expect(chatList.chatItem('Ana Beatriz')).toBeVisible();
    await expect(chatList.chatItem('Roberto Mendes')).not.toBeVisible();
    await expect(chatList.chatItem('Fernanda Lima')).not.toBeVisible();
  });

  test('clears filter when search is removed', async () => {
    await chatList.search('Ana');
    await expect(chatList.chatItem('Roberto Mendes')).not.toBeVisible();

    await chatList.clearSearch();
    await expect(chatList.chatItem('Roberto Mendes')).toBeVisible();
  });

  test('shows no unread badge for conversations with zero unreads', async () => {
    // Roberto Mendes has unreadCount: 0
    const count = await chatList.getUnreadCount('Roberto Mendes');
    expect(count).toBe(0);
  });

  test('displays last message preview text in the list', async () => {
    // Roberto Mendes last message is stable (no other test opens or sends to him)
    await expect(chatList.chatItem('Roberto Mendes')).toContainText('Proposta enviada por e-mail');
  });
});
