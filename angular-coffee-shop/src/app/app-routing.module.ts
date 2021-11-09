import {NgModule} from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import {SalesCustomerPage} from './pages/sales/customer/sales-customer.page';
import {CatalogOwnerPage} from './pages/catalog/owner/catalog-owner.page';

const routes: Routes = [
    {
	path: 'customer',
	component: SalesCustomerPage
    },
    {
	path: 'owner',
	component: CatalogOwnerPage
    },
    {
	path: '',
	redirectTo: '/customer',
	pathMatch: 'full'
    }
];

@NgModule({
	      imports: [RouterModule.forRoot(routes)],
	      exports: [RouterModule]
	  })
export class AppRoutingModule
{
}
