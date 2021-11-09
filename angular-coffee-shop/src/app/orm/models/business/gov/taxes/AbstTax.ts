import {AbstAmount} from "../../AbstAmount";

export abstract class AbstTax extends AbstAmount
{
    static readonly MAX_TAX: number = 200;

    protected constructor(aAmount: number)
    {
	super(aAmount);
	if (aAmount > AbstTax.MAX_TAX)
	{
	    throw new Error('Tax can\'t be greater than 200, asked discount is : ' + aAmount);
	}
    }

    public calculate(aCost: number): number
    {
	return (aCost * this.amount) / 100
    }
}
