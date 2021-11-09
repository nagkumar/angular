import {
    Component,
    Input,
    TemplateRef
} from '@angular/core';
import {ProductInfo} from "../../../../../orm/models/ProductInfo";
import {round} from "lodash";
import {AppConsts} from "../../../../../AppConsts";
import {PaymentService} from "../../../../../orm/models/services/payment/payment.service";
import {
    BsModalRef,
    BsModalService
} from "ngx-bootstrap/modal";
import {
    disableButton,
    enableButton
} from "../../../../../utils/UIUtils";
import {ComboItemsService} from "../../../../../orm/models/services/products/comboItems.service";

@Component({
	       selector: 'show-cart',
	       templateUrl: './cart.component.html',
	       styleUrls: ['./cart.component.scss']
	   })
export class CartComponent
{
    @Input() inAddProductInfoOnChangeData: Array<ProductInfo>;

    payButtonDisabled = false;
    message: string = '';
    modalRef: BsModalRef;
    networkActivity: boolean = false;

    totalCartItemsCosts: number = 0;
    totalCartTaxes: number = 0;
    totalCartPayCost: number = 0;

    constructor(private paymentService: PaymentService,
		private modalService: BsModalService,
		private comboItemsService: ComboItemsService)
    {
    }

    onDeleteItem(orderIndex: number)
    {
	this.inAddProductInfoOnChangeData.splice(orderIndex, 1);
    }

    public cartTotalCost()
    {
	//todo: it should check combo extra discounts here.. Usually that logic should go backend and BRE - Business Rule Engine
	//are used for such complex logic as it starts with RULE Composition with DSL and then logic to arrive at final costing
	//as it is a test, the only way now that all the structures are here..write tons of if logic as all the cartInfo, comboItems info is here
	//pl. verify code if architecturally correct for combo, as all the if conditions are not implemented as it is labour logic due to test scope

	this.totalCartItemsCosts = round(this.inAddProductInfoOnChangeData.reduce(
		(sumItemsCost, currentProductInfo) => sumItemsCost + currentProductInfo.getTotalItemPrice(), 0),
					 AppConsts.PRECISION);

	this.totalCartTaxes = round(this.inAddProductInfoOnChangeData.reduce(
		(sumTaxes, currentProductInfo) => sumTaxes + currentProductInfo.getTotalTax(), 0),
				    AppConsts.PRECISION);

	this.totalCartPayCost = round(this.inAddProductInfoOnChangeData.reduce(
		(sumTotal, currentProductInfo) => sumTotal + currentProductInfo.getQuantityTotalPrice(), 0),
				      AppConsts.PRECISION);
	this.payButtonDisabled = (this.totalCartPayCost == 0);
	return this.totalCartPayCost;
    }

    public doPayment(aTemplate: TemplateRef<any>, $event: UIEvent): void
    {
	this.payButtonDisabled = true;
	this.message = "On Yes, Gateway would be contacted for payment processing";
	this.modalRef = this.modalService.show(aTemplate, {class: 'modal-sm'});
    }

    confirm($event: UIEvent): void
    {
	this.networkActivity = true;
	disableButton($event);
	this.message = "Contacting Gateway to realize Payment"
	this.paymentService.doGatewayPayment(this.totalCartPayCost).then(r =>
									 {
									     this.message = "Payment realized : Bill Printed : Your order will be ready soon";
									     this.modalRef.hide();
									     enableButton($event);
									     this.networkActivity = false;
									     this.inAddProductInfoOnChangeData.splice(0, this.inAddProductInfoOnChangeData.length);
									     this.payButtonDisabled = true;
									 });
    }

    decline($event: UIEvent): void
    {
	this.payButtonDisabled = false;
	this.message = "";
	this.modalRef.hide();
    }
}
