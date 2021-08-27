import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from 'src/app/customer/components/list/view/customer-list.component';
import {CustomerAddComponent} from 'src/app/customer/components/add/view/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from 'src/app/customer/components/add/ngrx/reducer/customer.add.reducer';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
  exports: [
    CustomerListComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule {
}
