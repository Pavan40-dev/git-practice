import { APIRequestContext, expect } from '@playwright/test';
import loginData from '../testdata/data.json';
import { LoginResponse } from '../models/loginResponse';
import { ApiClient } from './apiClient';

export class AuthApi {
  private api: ApiClient;

  constructor(request: APIRequestContext) {
    this.api = new ApiClient(request);
  }

  async login(): Promise<LoginResponse> {
    const response = await this.api.post(
      '/auth/login',
      {
        userEmail: loginData.data[0].email,
        userPassword: loginData.data[0].password,
      }
    );

    expect(response.ok()).toBeTruthy();

    return await response.json();
  }

  async invalidLogin() {
    return this.api.post('/auth/login', {
      userEmail: loginData.data[1].email,
      userPassword: loginData.data[1].password,
    });
  }

  async emptyEmailLogin() {
    return this.api.post('/auth/login', {
      userEmail: loginData.data[2].email,
      userPassword: loginData.data[2].password,
    });
  }
}