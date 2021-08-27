import {Customer} from "src/app/customer/models/customer";

export interface NGMCustomerState {
  customers: Customer[];
}

export const initialState: NGMCustomerState = {
  customers: []
};
