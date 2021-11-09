import {Injectable} from '@angular/core';
import {fiveSecDelayPromise} from "../../../../utils/PromiseUtils";

@Injectable({
		providedIn: 'root'
	    })
export class PaymentService
{
    doGatewayPayment(aAmount: number)
    {
	return fiveSecDelayPromise()
    }
}
