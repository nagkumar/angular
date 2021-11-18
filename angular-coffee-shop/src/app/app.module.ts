import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppMainPage} from './pages/main/app.main.page';
import {ListThumbsComponent} from './pages/sales/customer/components/thumbs/list-thumbs.component';
import {CartComponent} from './pages/sales/customer/components/cart/cart.component';
import {CatalogOwnerPage} from './pages/catalog/owner/catalog-owner.page';
import {SalesCustomerPage} from './pages/sales/customer/sales-customer.page';
import {SingleItemsService} from './orm/models/services/products/singleItems.service';
import {OwnerTableComponent} from './pages/catalog/owner/components/table/owner-table.component';
import {EditFormComponent} from './pages/catalog/owner/components/edit/edit-form.component';
import {PaymentService} from "./orm/models/services/payment/payment.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsModalService} from "ngx-bootstrap/modal";
import {ComboItemsService} from "./orm/models/services/products/comboItems.service";

@NgModule({
	      declarations: [
		  AppMainPage,
		  ListThumbsComponent,
		  CartComponent,
		  CatalogOwnerPage,
		  SalesCustomerPage,
		  OwnerTableComponent,
		  EditFormComponent
	      ],
	      imports: [BrowserModule.withServerTransition({appId: 'serverApp'}), AppRoutingModule, FormsModule, BrowserAnimationsModule],
	      providers: [SingleItemsService, ComboItemsService, PaymentService, BsModalService],
	      bootstrap: [AppMainPage]
	  })
export class AppModule
{
}
