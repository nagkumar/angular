import {AbstDiscount} from "./AbstDiscount";

export class PercentageDiscount extends AbstDiscount
{
    constructor(aAmount: number)
    {
	super(aAmount);
    }

    public calculate(aCost: number): number
    {
	return (aCost - ((aCost * this.amount) / 100));
    }

    public getUnit(): string
    {
	return "%";
    }
}
