import {Action, createReducer, on} from '@ngrx/store';
import * as CustomerActions from 'src/app/screens/customer/components/add/ngrx/action/customer.add.actions';
import {initialState, NGMCustomerState} from "src/app/screens/customer/components/add/ngrx/reducer/NGMCustomerState";

export const customerAddKey = 'customerAdd';

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

export function reducer4CustomerAdd(aState: NGMCustomerState | undefined, aAction: Action): any {
  return customerAddReducer(aState, aAction);
}
