import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Customer} from 'src/app/customer/models/customer';
import {ADD_CUSTOMER_ACTION} from 'src/app/customer/components/add/ngrx/action/customer.add.actions';
import {CustomerState} from 'src/app/customer/components/add/ngrx/reducer/customer.add.reducer';

@Component({
  selector: 'app-customer-add',
  templateUrl: 'customer-add.component.html',
  styleUrls: ['customer-add.component.scss']
})
export class CustomerAddComponent {
  @ViewChild('box') box: ElementRef;

  constructor(private store: Store<CustomerState>) {
  }

  onAddCustomerButtonClick(aCustomerName: string): void {
    const customer = new Customer(aCustomerName);
    this.box.nativeElement.value = ' ';
    this.store.dispatch(ADD_CUSTOMER_ACTION(customer));
  }
}
