import { APIRequestContext } from '@playwright/test';
import { ApiClient } from './apiClient';

export class CartApi {
  private api: ApiClient;

  constructor(request: APIRequestContext) {
    this.api = new ApiClient(request);
  }

  async addToCart(
    token: string,
    userId: string,
    product: any
  ) {
    return this.api.post(
      '/user/add-to-cart',
      {
        _id: userId,
        product,
      },
      token
    );
  }

  async getCart(
    token: string,
    userId: string
  ) {
    return this.api.get(
      `/user/get-cart-products/${userId}`,
      token
    );
  }
}