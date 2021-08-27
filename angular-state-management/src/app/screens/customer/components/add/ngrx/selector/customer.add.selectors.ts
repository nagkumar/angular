import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCustomer from 'src/app/screens/customer/components/add/ngrx/reducer/customer.add.reducer';
import {NGMCustomerState} from "src/app/screens/customer/components/add/ngrx/reducer/NGMCustomerState";

export const selectCustomerState = createFeatureSelector<NGMCustomerState>(
  fromCustomer.customerFeatureKey,
);
export const selectCustomers = createSelector(
  selectCustomerState,
  (state: NGMCustomerState) => state.customers
);
