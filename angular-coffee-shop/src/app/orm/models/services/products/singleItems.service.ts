import {Injectable} from '@angular/core';
import {MockSingleItems} from "./mock/MockSingleItems";
import {ProductInfo} from "../../ProductInfo";

@Injectable()
export class SingleItemsService
{
    public readonly fetchedProductInfoList: Array<ProductInfo> = MockSingleItems.createProductInfoMock();

    addItem(aAddedItem: ProductInfo)
    {
	this.fetchedProductInfoList.push(aAddedItem);
    }

    updateProductInfo(aIndex: number, aEditedItem: ProductInfo)
    {
	let toUpdateProductInfo: ProductInfo = (this.fetchedProductInfoList[aIndex]);
	toUpdateProductInfo.singleItem.update(aEditedItem.singleItem);
	toUpdateProductInfo.itemMetaInfo.update(aEditedItem.itemMetaInfo)
    }

    deleteProductInfo(aIndex: number)
    {
	this.fetchedProductInfoList.splice(aIndex, 1);
    }
}

