export class CartItemInfo
{
    quantity: number = 0

    public addUpQuantity(): void
    {
	this.quantity++;
    }
}
