import {PercentageDiscount} from "../PercentageDiscount";

export class ExtraPercentageDiscount extends PercentageDiscount
{
    constructor(aAmount: number)
    {
	super(aAmount);
    }

    public getUnit(): string
    {
	return "extra%";
    }
}
