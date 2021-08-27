import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Customer} from '../../../models/customer';
import {addCustomer} from '../ngrx/action/customer.add.actions';
import {CustomerState} from '../ngrx/reducer/customer.add.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent {
  @ViewChild('box') box: ElementRef;

  constructor(private store: Store<CustomerState>) {
  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.box.nativeElement.value = ' ';
    this.store.dispatch(addCustomer(customer));
  }
}
