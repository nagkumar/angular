import {Component, ElementRef, Injectable, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {Customer} from 'src/app/screens/customer/models/customer';
import {ADD_CUSTOMER_ACTION} from 'src/app/screens/customer/components/add/ngrx/action/customer.add.actions';
import {NGMCustomerState} from "src/app/screens/customer/components/add/ngrx/reducer/NGMCustomerState";
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-customer-add',
  templateUrl: 'customer-add.component.html',
  styleUrls: ['customer-add.component.scss'],
})

export class CustomerAddComponent {
  @ViewChild('box') box: ElementRef;

  constructor(private store: Store<NGMCustomerState>, private logger: NGXLogger) {
  }

  onAddCustomerButtonClick(aCustomerName: string): void {
    this.logger.debug('Your logEEE message goes here');
    this.store.dispatch(ADD_CUSTOMER_ACTION(new Customer(aCustomerName)));
    this.box.nativeElement.value = ' ';
  }
}
