import {TestBed} from '@angular/core/testing';

import {PaymentService} from '../payment.service';

describe('HeroService', () =>
{
    let service: PaymentService;

    beforeEach(() =>
	       {
		   TestBed.configureTestingModule({});
		   service = TestBed.inject(PaymentService);
	       });

    it('should be created', () =>
    {
	expect(service).toBeTruthy();
    });
});
