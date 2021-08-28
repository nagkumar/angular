import {reducer4CustomerAdd} from 'src/app/screens/customer/components/add/ngrx/reducer/customer.add.reducer';
import {initialState} from 'src/app/screens/customer/components/add/ngrx/reducer/NGMCustomerState';

describe('Customer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer4CustomerAdd(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
