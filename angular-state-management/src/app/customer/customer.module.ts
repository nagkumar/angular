import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from './store/reducer/customer.reducer';

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
