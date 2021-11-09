import {SingleItem} from "../../../items/SingleItem";
import {GSTTax} from "../../../business/gov/taxes/GSTTax";
import {AbsoluteDiscount} from "../../../business/offers/AbsoluteDiscount";
import {PercentageDiscount} from "../../../business/offers/PercentageDiscount";
import {Free} from "../../../business/offers/Free";
import {ItemMetaInfo,} from "../../../items/ItemMetaInfo";
import {ProductInfo} from "../../../ProductInfo";
import {ProductInfoBuilder} from "../../../builders/ProductInfoBuilder";

export class MockSingleItems
{
    static createProductInfoMock(): Array<ProductInfo>
    {
	return [
	    ProductInfoBuilder.create(
		    new SingleItem('18%FreeGSTGreen Tea',
				   100,
				   new URL('https://globalassets.starbucks.com/assets/9e8fc57b10cb4c5fbfc5422acff4dc57.jpg')),
		    new ItemMetaInfo(new GSTTax(18),
				     new Free())),

	    ProductInfoBuilder.create(
		    new SingleItem('NoGSNoDiscountLate2',
				   220,
				   new URL('https://globalassets.starbucks.com/assets/23efb9e2cd284d6b8a17d52f57d363a8.jpg'))),
	    ProductInfoBuilder.create(
		    new SingleItem('5%GSTNoDiscountLate',
				   120,
				   new URL('https://globalassets.starbucks.com/assets/23efb9e2cd284d6b8a17d52f57d363a8.jpg')),
		    new ItemMetaInfo(new GSTTax(5))),

	    ProductInfoBuilder.create(new SingleItem('Milk',
						     80,
						     new URL('https://globalassets.starbucks.com/assets/574bb3dfc4ff4294b172301f0848e17f.jpg')),
				      new ItemMetaInfo(ItemMetaInfo.RECOMMEND,
						       new GSTTax(12),
						       new PercentageDiscount(5))),

	    ProductInfoBuilder.create(new SingleItem('28%GSTAbsolute10DiscountMilkNag',
						     180,
						     new URL('https://globalassets.starbucks.com/assets/574bb3dfc4ff4294b172301f0848e17f.jpg')),
				      new ItemMetaInfo(new GSTTax(28),
						       new AbsoluteDiscount(10)))
	];
    }
}
