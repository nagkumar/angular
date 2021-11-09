import {
    Component,
    EventEmitter,
    OnInit,
    Output
} from '@angular/core';
import {SingleItemsService} from '../../../../../orm/models/services/products/singleItems.service';
import {ProductInfo} from "../../../../../orm/models/ProductInfo";

@Component({
	       selector: 'show-catalog-list',
	       templateUrl: './list-thumbs.component.html',
	       styleUrls: ['./list-thumbs.component.scss']
	   })
export class ListThumbsComponent implements OnInit
{
    @Output() outOrderItemEvent = new EventEmitter();

    constructor(public productsService: SingleItemsService)
    {
    }

    ngOnInit()
    {
    }

    addProductInfo2Cart(aProductInfo: ProductInfo)
    {
	this.outOrderItemEvent.emit(aProductInfo);
    }
}
