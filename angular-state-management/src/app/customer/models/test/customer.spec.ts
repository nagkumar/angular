import {Customer} from 'src/app/customer/models/customer';

describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer("RAJA")).toBeTruthy();
  });
});
