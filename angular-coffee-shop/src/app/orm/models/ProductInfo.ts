import {SingleItem} from "./items/SingleItem";
import {ItemMetaInfo} from "./items/ItemMetaInfo";
import {CartItemInfo} from "../../pages/sales/models/CartItemInfo";
import {round} from "lodash";
import {AppConsts} from "../../AppConsts";

export class ProductInfo
{
    singleItem: SingleItem = new SingleItem()
    itemMetaInfo: ItemMetaInfo = new ItemMetaInfo()
    cartInfo: CartItemInfo = new CartItemInfo()

    public update(lEditedProductInfo: ProductInfo): void
    {
	if ((lEditedProductInfo.singleItem != undefined) || (lEditedProductInfo.singleItem != null))
	{
	    this.singleItem.update(lEditedProductInfo.singleItem);
	}

	if ((lEditedProductInfo.itemMetaInfo != undefined) || (lEditedProductInfo.itemMetaInfo != null))
	{
	    this.itemMetaInfo.update(lEditedProductInfo.itemMetaInfo);
	}

	if ((lEditedProductInfo.itemMetaInfo != undefined) || (lEditedProductInfo.itemMetaInfo != null))
	{
	    this.cartInfo = lEditedProductInfo.cartInfo;
	}
    }

    public getTotalItemPrice(): number
    {
	return round(this.getItemDiscountedPrice() * this.cartInfo.quantity, AppConsts.PRECISION);
    }

    public getTotalTax(): number
    {
	return round(this.getItemTaxedAmount() * this.cartInfo.quantity, AppConsts.PRECISION);
    }

    public getQuantityTotalPrice(): number
    {
	return round(this.getItemCostWithTax() * this.cartInfo.quantity, AppConsts.PRECISION);
    }

    private getItemDiscountedPrice(): number
    {
	return round(this.itemMetaInfo.discount.calculate(this.singleItem.price), AppConsts.PRECISION);
    }

    private getItemTaxedAmount(): number
    {
	return round(this.itemMetaInfo.tax.calculate(this.getItemDiscountedPrice()), AppConsts.PRECISION);
    }

    private getItemCostWithTax(): number
    {
	return round(this.getItemDiscountedPrice() + this.getItemTaxedAmount(), AppConsts.PRECISION);
    }
}
