import {AbsoluteDiscount} from "../AbsoluteDiscount";

export class ExtraAbsoluteDiscount extends AbsoluteDiscount
{
    constructor(aAmount: number)
    {
	super(aAmount);
    }

    public getUnit(): string
    {
	return "absoluteExtra";
    }
}
