import type { Page, Locator } from '@playwright/test';

export class ConversationListPage {
  readonly root: Locator;
  readonly searchInput: Locator;

  constructor(private page: Page) {
    this.root = page.locator('[data-testid="conversation-list"]');
    this.searchInput = page.locator('[data-testid="search-input"]');
  }

  /** Wait until the chat list has at least one item rendered. */
  async waitForLoaded() {
    await this.root.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('[data-testid="chat-item"]').first().waitFor({ state: 'visible', timeout: 15000 });
  }

  /** Locator for a specific chat item by contact/display name. */
  chatItem(name: string): Locator {
    return this.page.locator(`[data-testid="chat-item"][data-chat-name="${name}"]`);
  }

  /** All visible chat items. */
  allItems(): Locator {
    return this.page.locator('[data-testid="chat-item"]');
  }

  async clickChat(name: string) {
    await this.chatItem(name).click();
  }

  async search(query: string) {
    await this.searchInput.fill(query);
  }

  async clearSearch() {
    await this.searchInput.fill('');
  }

  /** Returns the numeric unread count for a chat, or 0 if no badge. */
  async getUnreadCount(name: string): Promise<number> {
    const badge = this.chatItem(name).locator('[data-testid="unread-badge"]');
    const visible = await badge.isVisible();
    if (!visible) return 0;
    const text = await badge.textContent();
    return parseInt(text ?? '0', 10);
  }

  /** The three-dot menu trigger button inside a chat item. */
  chatMenuTrigger(name: string): Locator {
    return this.chatItem(name).locator('[data-testid="chat-menu-trigger"]');
  }

  /** Click the three-dot button to open the chat actions panel. */
  async openChatMenu(name: string) {
    await this.chatMenuTrigger(name).click();
  }
}
