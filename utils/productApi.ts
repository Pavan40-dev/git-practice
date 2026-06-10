import { APIRequestContext } from '@playwright/test';
import { ApiClient } from './apiClient';

export class ProductApi {
  private api: ApiClient;

  constructor(request: APIRequestContext) {
    this.api = new ApiClient(request);
  }

  private productFilter = {
    productName: '',
    minPrice: null,
    maxPrice: null,
    productCategory: [],
    productSubCategory: [],
    productFor: [],
  };

  async getAllProducts(token: string) {
    return this.api.post(
      '/product/get-all-products',
      this.productFilter,
      token
    );
  }
}