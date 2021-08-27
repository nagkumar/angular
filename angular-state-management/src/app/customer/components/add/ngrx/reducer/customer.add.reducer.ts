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
    (state: CustomerState, {customer}) =>
      ({
        ...state,
        customers: [...state.customers, customer]
      }))
);

export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerAddReducer(state, action);
}
