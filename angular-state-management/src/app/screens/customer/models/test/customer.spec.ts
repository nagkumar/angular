import {Customer} from 'src/app/screens/customer/models/customer';

describe('Customer', () => {
  it('should create an instance of customer', () => {
    expect(new Customer("RAJA")).toBeTruthy();
  });
});
