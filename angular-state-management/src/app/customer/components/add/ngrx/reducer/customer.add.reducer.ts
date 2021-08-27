import {Action, createReducer, on} from '@ngrx/store';
import * as CustomerActions from 'src/app/customer/components/add/ngrx/action/customer.add.actions';
import {initialState, NGMCustomerState} from "src/app/customer/components/add/ngrx/reducer/NGMCustomerState";

export const customerFeatureKey = 'customer';

const customerAddReducer = createReducer(
  initialState,
  on(CustomerActions.ADD_CUSTOMER_ACTION,
    (aState: NGMCustomerState, {customer}) =>
      (
        {
          ...aState,
          customers: [...aState.customers, customer]
        }
      )
  )
);

export function reducer(aState: NGMCustomerState | undefined, aAction: Action): any {
  return customerAddReducer(aState, aAction);
}
