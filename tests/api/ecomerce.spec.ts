import {
  test,
  expect,
} from '../../fixtures/auth.fixture';

import { ProductApi } from '../../utils/productApi';
import { CartApi } from '../../utils/cartApi';
import { OrderApi } from '../../utils/orderApi';

test.describe(
  'E-Commerce API Validation',
  () => {
    test(
      'Get Products',
      async ({
        request,
        authData,
      }) => {
        const response =
          await new ProductApi(
            request
          ).getAllProducts(
            authData.token
          );

        expect(
          response.ok()
        ).toBeTruthy();

        const body =
          await response.json();

        expect(
          body.data.length
        ).toBeGreaterThan(0);
      }
    );

    test(
      'Get Orders',
      async ({
        request,
        authData,
      }) => {
        const response =
          await new OrderApi(
            request
          ).getOrders(
            authData.token,
            authData.userId
          );

        expect(
          response.ok()
        ).toBeTruthy();
      }
    );
  }
);