import { APIRequestContext } from '@playwright/test';
import { API_BASE_URL } from '../config/apiConfig';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  async get(endpoint: string, token?: string) {
    return this.request.get(
      `${API_BASE_URL}${endpoint}`,
      {
        headers: token
          ? {
              Authorization: token,
            }
          : {},
      }
    );
  }

  async post(
    endpoint: string,
    payload: any,
    token?: string
  ) {
    return this.request.post(
      `${API_BASE_URL}${endpoint}`,
      {
        headers: token
          ? {
              Authorization: token,
            }
          : {},
        data: payload,
      }
    );
  }
}