import {AbstDiscount} from "./AbstDiscount";

export class AbsoluteDiscount extends AbstDiscount
{
    constructor(aAmount: number)
    {
	super(aAmount);
    }

    public calculate(aCost: number): number
    {
	return aCost - this.amount;
    }

    public getUnit(): string
    {
	return "absolute";
    }
}
