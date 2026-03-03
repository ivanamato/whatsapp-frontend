import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4174',
  },
  webServer: {
    command: 'cp tests/i18n-test.html dist/ && npx serve dist -l 4174 -C --no-request-logging',
    port: 4174,
    reuseExistingServer: true,
  },
});
