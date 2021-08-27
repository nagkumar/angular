import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from './list/view/customer-list.component';
import {CustomerAddComponent} from './add/view/customer-add.component';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from './add/ngrx/reducer/customer.reducer';

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
