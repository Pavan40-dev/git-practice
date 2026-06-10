import { test as base } from '@playwright/test';
import { AuthApi } from '../utils/authApi';
import { LoginResponse } from '../models/loginResponse';

type AuthFixture = {
  authData: LoginResponse;
};

export const test = base.extend<AuthFixture>({
  authData: async ({ request }, use) => {
    const authApi = new AuthApi(request);

    const authData = await authApi.login();

    await use(authData);
  },
});

export { expect } from '@playwright/test';