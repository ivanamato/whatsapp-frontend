import type { Page, Locator } from '@playwright/test';

export class MessageThreadPage {
  readonly root: Locator;
  readonly messageInput: Locator;
  readonly sendButton: Locator;

  constructor(private page: Page) {
    this.root = page.locator('[data-testid="message-thread"]');
    this.messageInput = page.locator('[data-testid="message-input"]');
    this.sendButton = page.locator('[data-testid="send-button"]');
  }

  /** Wait until the thread is visible and at least one message bubble is rendered. */
  async waitForLoaded() {
    await this.root.waitFor({ state: 'visible', timeout: 15000 });
    await this.page.locator('[data-testid="message-bubble"]').first().waitFor({ state: 'visible', timeout: 15000 });
  }

  /** All message bubbles in the thread. */
  allBubbles(): Locator {
    return this.page.locator('[data-testid="message-bubble"]');
  }

  /** Outbound (sent) bubbles. */
  outboundBubbles(): Locator {
    return this.page.locator('[data-testid="message-bubble"][data-direction="outbound"]');
  }

  /** Inbound (received) bubbles. */
  inboundBubbles(): Locator {
    return this.page.locator('[data-testid="message-bubble"][data-direction="inbound"]');
  }

  /** A bubble containing specific text. */
  bubbleWithText(text: string): Locator {
    return this.page.locator(`[data-testid="message-bubble"]:has-text("${text}")`);
  }

  async typeMessage(text: string) {
    await this.messageInput.fill(text);
  }

  /** Type a message and send it (Enter key). */
  async sendMessage(text: string) {
    await this.messageInput.fill(text);
    await this.messageInput.press('Enter');
  }
}
