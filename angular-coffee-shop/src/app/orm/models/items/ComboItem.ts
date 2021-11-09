import {AbstItem} from "./AbstItem";
import {AbstDiscount} from "../business/offers/AbstDiscount";
import {ProductInfo} from "../ProductInfo";

export class ComboItem extends AbstItem
{
    itemA: ProductInfo;
    itemB: ProductInfo;
    comboDiscount: AbstDiscount

    constructor(aItemA: ProductInfo, aItemB: ProductInfo, aComboDiscount: AbstDiscount)
    {
	super();
	this.itemA = aItemA;
	this.itemB = aItemB;
	this.comboDiscount = aComboDiscount;
    }
}
