import {AbstAmount} from "../AbstAmount";

export abstract class AbstDiscount extends AbstAmount
{
    static readonly MAX_DISCOUNT: number = 100;

    protected constructor(aAmount: number)
    {
	super(aAmount);

	if (aAmount > AbstDiscount.MAX_DISCOUNT)
	{
	    throw new Error('Discount can\'t be greater than 100, asked discount is' + aAmount);
	}
    }

    public abstract getUnit(): string
}
