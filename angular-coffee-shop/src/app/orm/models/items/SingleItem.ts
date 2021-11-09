import * as URL from "url";
import {AbstItem} from "./AbstItem";

export class SingleItem extends AbstItem
{
    name: string = ''
    price: number = 0
    image: URL

    public constructor(...aParamsArray: any[])
    {
	super();
	for (let i = 0; i < aParamsArray.length; i++)
	{
	    const element = aParamsArray[i];

	    if ((typeof element) == 'string')
	    {
		this.name = element;

	    }
	    else if ((typeof element) === 'number')
	    {
		this.price = element;
	    }
	    else
	    {
		this.image = element;
	    }
	}
    }

    public update(aEditedItem: SingleItem): void
    {
	this.doUpdate(aEditedItem.name, aEditedItem.price, aEditedItem.image)
    }

    private doUpdate(aName: string, aPrice: number, aImage: URL)
    {
	this.name = aName;
	this.price = aPrice;
	this.image = aImage;
    }
}
