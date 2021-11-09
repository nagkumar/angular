import {ProductInfo} from "../ProductInfo";
import {SingleItem} from "../items/SingleItem";
import {ItemMetaInfo} from "../items/ItemMetaInfo";
import {CartItemInfo} from "../../../pages/sales/models/CartItemInfo";

export class ProductInfoBuilder
{
    static createEmptyProductInfo(): ProductInfo
    {
	return new ProductInfo();
    }

    static create(aSingleItem?: SingleItem, aItemMetaInfo?: ItemMetaInfo, aCartInfo?: CartItemInfo): ProductInfo
    {
	let lResult: ProductInfo = ProductInfoBuilder.createEmptyProductInfo()

	if ((aSingleItem != undefined) || (aSingleItem != null))
	{
	    lResult.singleItem = aSingleItem;
	}

	if ((aItemMetaInfo != undefined) || (aItemMetaInfo != null))
	{
	    lResult.itemMetaInfo = aItemMetaInfo;
	}

	if ((aCartInfo != undefined) || (aCartInfo != null))
	{
	    lResult.cartInfo = aCartInfo;
	}

	return lResult;
    }
}
