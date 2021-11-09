import {Component} from '@angular/core';

@Component({
	       selector: 'app-coffee-owner',
	       templateUrl: './catalog-owner.page.html',
	       styleUrls: ['./catalog-owner.page.scss']
	   })
export class CatalogOwnerPage
{
    pageVarToEditItem: Object

    pageMethodReceiveEditItem(aViewChosenEditItem: Object)
    {
	this.pageVarToEditItem = aViewChosenEditItem;
    }
}
