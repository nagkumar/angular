import {AbstTax} from "../business/gov/taxes/AbstTax";
import {AbstDiscount} from "../business/offers/AbstDiscount";
import {PercentageDiscount} from "../business/offers/PercentageDiscount";
import {GSTTax} from "../business/gov/taxes/GSTTax";
import {AbsoluteDiscount} from "../business/offers/AbsoluteDiscount";

export class ItemMetaInfo
{
    public static readonly RECOMMEND: boolean = true;

    recommended: boolean = !ItemMetaInfo.RECOMMEND
    tax: AbstTax = new GSTTax(0)
    discount: AbstDiscount = new AbsoluteDiscount(0)

    public constructor(...aParamsArray: any[])
    {
	for (let i = 0; i < aParamsArray.length; i++)
	{
	    const element = aParamsArray[i];

	    if (element instanceof AbstTax)
	    {
		this.tax = element;

	    }
	    else if (element instanceof AbstDiscount)
	    {
		this.discount = element;
	    }
	    else
	    {
		this.recommended = element;
	    }
	}
    }

    public setDiscount($event: string | number): void
    {
	this.discount = new PercentageDiscount(+$event);
    }

    public getDiscount(): number
    {
	return this.discount != undefined ? this.discount.amount : 0;
    }

    public setTax($event: number): void
    {
	this.tax = new GSTTax($event);
    }

    public getTax(): number
    {
	return this.tax != undefined ? this.tax.amount : 0;
    }

    public isRecommended(): boolean
    {
	return this.recommended;
    }

    public setRecommended($event: string): void
    {
	this.recommended = Boolean($event)
    }

    public update(aEditedMetaInfoItem: ItemMetaInfo): void
    {
	this.recommended = aEditedMetaInfoItem.isRecommended();
	this.setTax(aEditedMetaInfoItem.getTax());
	this.setDiscount(aEditedMetaInfoItem.getDiscount());
    }
}
