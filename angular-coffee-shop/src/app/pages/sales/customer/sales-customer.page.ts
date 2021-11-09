import {Component} from '@angular/core';
import {ProductInfo} from "../../../orm/models/ProductInfo";

@Component({
	       selector: 'app-coffee-customer',
	       templateUrl: './sales-customer.page.html',
	       styleUrls: ['./sales-customer.page.scss']
	   })
export class SalesCustomerPage
{
    public readonly pageVarAddedOrdersList: Array<ProductInfo> = new Array<ProductInfo>();

    pageMethodReceiveOrderProductInfo(aProductInfo: ProductInfo)
    {
	let index = this.pageVarAddedOrdersList.indexOf(aProductInfo);
	if (index < 0)
	{
	    this.pageVarAddedOrdersList.push(aProductInfo);
	}
	aProductInfo.cartInfo.addUpQuantity();
    }
}
