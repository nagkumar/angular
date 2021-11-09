import {DBEntity} from "../DBEntity";

export abstract class AbstAmount extends DBEntity
{
    public amount: number;

    protected constructor(aAmount: number)
    {
	super();
	this.amount = aAmount;
    }

    abstract calculate(aCost: number): number;
}
