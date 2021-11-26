import {
    Component,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import {SingleItemsService} from "../../../../../orm/models/services/products/singleItems.service";
import {ProductInfoBuilder} from "../../../../../orm/models/builders/ProductInfoBuilder";
import {ProductInfo} from "../../../../../orm/models/ProductInfo";

@Component({
	       selector: 'owner-edit-form',
	       templateUrl: './edit-form.component.html',
	       styleUrls: ['./edit-form.component.scss']
	   })
export class EditFormComponent implements OnChanges
{
    @Input() inEditItemOnChangeData: any;

    formProductInfo: ProductInfo = ProductInfoBuilder.createEmptyProductInfo();

    constructor(private productsService: SingleItemsService)
    {
    }

    isEdit(aChanges)
    {
	return (aChanges.inEditItemOnChangeData.currentValue != undefined) || (aChanges.inEditItemOnChangeData.currentValue != null);
    }

    ngOnChanges(aChanges: SimpleChanges)
    {
	if (this.isEdit(aChanges))
	{
	    this.formProductInfo.update(aChanges.inEditItemOnChangeData.currentValue.productInfo);
	}
    }

    onAddNew()
    {
	this.productsService.addItem(this.formProductInfo);
	this.clear();
    }

    onEditedSave()
    {
	this.productsService.updateProductInfo(this.inEditItemOnChangeData.index, this.formProductInfo);
	this.clear();
    }

    clear()
    {
	this.formProductInfo = ProductInfoBuilder.createEmptyProductInfo();
	this.inEditItemOnChangeData = undefined;
    }
}
