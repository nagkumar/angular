import {Injectable} from '@angular/core';
import {ComboItem} from "../../items/ComboItem";
import {SingleItemsService} from "./singleItems.service";
import {ProductInfo} from "../../ProductInfo";
import {ExtraPercentageDiscount} from "../../business/offers/extra/ExtraPercentageDiscount";
import {ExtraAbsoluteDiscount} from "../../business/offers/extra/ExtraAbsoluteDiscount";
import {ExtraFree} from "../../business/offers/extra/ExtraFree";

@Injectable()
export class ComboItemsService
{
    public readonly fetchedComboItemsList: Array<ComboItem> = [];

    constructor(private singleItemService: SingleItemsService)
    {
	this.createComboItems()
    }

    createComboItems()
    {
	let items: Array<ProductInfo> = this.singleItemService.fetchedProductInfoList;
	this.fetchedComboItemsList.push(new ComboItem(items[0], items[3], new ExtraPercentageDiscount(10)));
	this.fetchedComboItemsList.push(new ComboItem(items[0], items[4], new ExtraAbsoluteDiscount(23)));
	this.fetchedComboItemsList.push(new ComboItem(items[0], items[4], new ExtraFree()));
    }
}

