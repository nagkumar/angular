import {AbstTax} from "./AbstTax";

export class GSTTax extends AbstTax
{
    constructor(aTaxPercent: number)
    {
	super(aTaxPercent);
    }
}
