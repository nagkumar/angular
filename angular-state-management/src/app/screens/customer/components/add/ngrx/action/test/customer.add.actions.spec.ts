import * as fromCustomer from 'src/app/screens/customer/components/add/ngrx/action/customer.add.actions';

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(fromCustomer.loadCustomers().type).toBe('[Customer] Load Customers');
  });
});
