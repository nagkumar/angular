import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from 'src/app/screens/customer/models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from 'src/app/screens/customer/components/add/ngrx/selector/customer.add.selectors';
import {NGMCustomerState} from "src/app/screens/customer/components/add/ngrx/reducer/NGMCustomerState";

@Component({
  selector: 'app-customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.scss']
})
export class CustomerListComponent {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<NGMCustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }
}
