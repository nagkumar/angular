import {Customer} from "../../../../models/customer";

export interface NGMCustomerState {
  customers: Customer[];
}

export const initialState: NGMCustomerState = {
  customers: []
};
