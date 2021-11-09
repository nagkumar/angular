import {
    Component,
    EventEmitter,
    Output
} from '@angular/core';
import {SingleItemsService} from "../../../../../orm/models/services/products/singleItems.service";
import {ProductInfo} from "../../../../../orm/models/ProductInfo";

@Component({
	       selector: 'owner-table',
	       templateUrl: './owner-table.component.html',
	       styleUrls: ['./owner-table.component.scss']
	   })
export class OwnerTableComponent
{
    @Output() outEditItemEEmitter = new EventEmitter();

    constructor(public productsService: SingleItemsService)
    {
    }

    onEditItem(aProductInfo: ProductInfo, aIndex: number)
    {
	this.outEditItemEEmitter.emit({productInfo: aProductInfo, index: aIndex});
    }

    onDeleteItem(aIndex: number)
    {
	this.productsService.deleteProductInfo(aIndex);
    }
}
