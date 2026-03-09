import type { Page, Locator } from '@playwright/test';

export class ChatActionsPage {
  readonly panel: Locator;
  readonly closeButton: Locator;
  readonly contactName: Locator;
  readonly phoneNumber: Locator;

  constructor(private page: Page) {
    this.panel = page.locator('[data-testid="chat-actions-panel"]');
    this.closeButton = page.locator('[data-testid="chat-actions-close"]');
    this.contactName = page.locator('[data-testid="chat-actions-contact-name"]');
    this.phoneNumber = page.locator('[data-testid="chat-actions-phone-number"]');
  }

  async waitForOpen() {
    await this.panel.waitFor({ state: 'visible', timeout: 5000 });
  }

  async waitForClosed() {
    await this.panel.waitFor({ state: 'hidden', timeout: 5000 });
  }

  async close() {
    await this.closeButton.click();
  }

  /** Click the backdrop (outside the panel) to dismiss the dialog. */
  async clickBackdrop() {
    await this.page.mouse.click(10, 10);
  }

  /** A specific action button by its id. */
  actionButton(id: string): Locator {
    return this.page.locator(`[data-testid="chat-action-button"][data-action-id="${id}"]`);
  }

  /** All rendered action buttons. */
  allActionButtons(): Locator {
    return this.page.locator('[data-testid="chat-action-button"]');
  }
}
