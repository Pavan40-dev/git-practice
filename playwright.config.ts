import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },
    {
      name: 'authenticated',
      use: {
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
      testIgnore: [
        '**/login.spec.ts',
        '**/*.setup.ts',
      ],
    },
    {
      name: 'unauthenticated',
      testMatch: '**/login.spec.ts',
    },
  ],
});