import { ValidateCustomerAccountMiddleware } from './validate-customer-account.middleware';

describe('ValidateCustomerAccountMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidateCustomerAccountMiddleware()).toBeDefined();
  });
});
