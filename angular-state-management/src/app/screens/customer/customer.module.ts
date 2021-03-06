import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from 'src/app/screens/customer/components/list/view/customer-list.component';
import {CustomerAddComponent} from 'src/app/screens/customer/components/add/view/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerAddKey, reducer4CustomerAdd} from 'src/app/screens/customer/components/add/ngrx/reducer/customer.add.reducer';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerAddKey, reducer4CustomerAdd),
  ],
  exports: [
    CustomerListComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule {
}
