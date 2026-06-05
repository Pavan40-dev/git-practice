import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  workers: 1,

  reporter: [
    ['line'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.ts',
    },

    {
      name: 'authenticated',
      dependencies: ['setup'],

      use: {
        storageState: 'playwright/.auth/user.json',
      },

      testIgnore: [
        '**/*.setup.ts',
        '**/login.spec.ts',
      ],
    },

    {
      name: 'unauthenticated',
      testMatch: '**/login.spec.ts',
    },
  ],
});