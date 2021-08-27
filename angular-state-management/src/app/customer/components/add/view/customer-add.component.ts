import {Component, ElementRef, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Customer} from 'src/app/customer/models/customer';
import {ADD_CUSTOMER_ACTION} from 'src/app/customer/components/add/ngrx/action/customer.add.actions';
import {NGMCustomerState} from "src/app/customer/components/add/ngrx/reducer/NGMCustomerState";

@Component({
  selector: 'app-customer-add',
  templateUrl: 'customer-add.component.html',
  styleUrls: ['customer-add.component.scss']
})
export class CustomerAddComponent {
  @ViewChild('box') box: ElementRef;

  constructor(private store: Store<NGMCustomerState>) {
  }

  onAddCustomerButtonClick(aCustomerName: string): void {
    this.store.dispatch(ADD_CUSTOMER_ACTION(new Customer(aCustomerName)));
    this.box.nativeElement.value = ' ';
  }
}
