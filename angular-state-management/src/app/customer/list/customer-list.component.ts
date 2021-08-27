import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../store/selector/customer.selectors';
import {CustomerState} from '../store/reducer/customer.reducer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }
}
