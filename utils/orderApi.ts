import { APIRequestContext } from '@playwright/test';
import { ApiClient } from './apiClient';

export class OrderApi {
  private api: ApiClient;

  constructor(request: APIRequestContext) {
    this.api = new ApiClient(request);
  }

  async getOrders(
    token: string,
    userId: string
  ) {
    return this.api.get(
      `/order/get-orders-for-customer/${userId}`,
      token
    );
  }

  async getOrderDetails(
    token: string,
    orderId: string
  ) {
    return this.api.get(
      `/order/get-orders-details?id=${orderId}`,
      token
    );
  }
}