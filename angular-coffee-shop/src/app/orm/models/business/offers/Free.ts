import {AbstDiscount} from "./AbstDiscount";

export class Free extends AbstDiscount
{
    constructor()
    {
	super(100);
    }

    public calculate(aCost: number): number
    {
	return 0;
    }

    public getUnit(): string
    {
	return "% free";
    }
}
