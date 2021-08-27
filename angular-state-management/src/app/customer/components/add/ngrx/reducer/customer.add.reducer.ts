import {Action, createReducer, on} from '@ngrx/store';
import * as CustomerActions from 'src/app/customer/components/add/ngrx/action/customer.add.actions';
import {Customer} from 'src/app/customer/models/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: []
};

export const customerAddReducer = createReducer(
  initialState,
  on(CustomerActions.ADD_CUSTOMER_ACTION,
    (aState: CustomerState, {customer}) =>
      (
        {
          ...aState,
          customers: [...aState.customers, customer]
        }
      )
  )
);

export function reducer(aState: CustomerState | undefined, aAction: Action): any {
  return customerAddReducer(aState, aAction);
}
