import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCustomer from 'src/app/customer/components/add/ngrx/reducer/customer.add.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
  fromCustomer.customerFeatureKey,
);
export const selectCustomers = createSelector(
  selectCustomerState,
  (state: fromCustomer.CustomerState) => state.customers
);