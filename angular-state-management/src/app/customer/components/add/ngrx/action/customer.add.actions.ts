import {createAction} from '@ngrx/store';
import {Customer} from 'src/app/customer/models/customer';

const ADD_CUSTOMER_TXT = '[Customer] Add Customer';
export const ADD_CUSTOMER_ACTION = createAction(
  ADD_CUSTOMER_TXT,
  (customer: Customer) => ({customer})
);
