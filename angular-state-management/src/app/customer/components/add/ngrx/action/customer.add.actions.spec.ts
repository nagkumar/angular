import * as fromCustomer from './customer.add.actions';

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.loadCustomers().type).toBe('[Customer] Load Customers');
  });
});
