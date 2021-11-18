/* eslint-disable @typescript-eslint/no-unused-vars */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppInitService } from './app-init.service';

describe('Service: AppInit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInitService]
    });
  });

  it('should ...', inject([AppInitService], (service: AppInitService) => {
    expect(service).toBeTruthy();
  }));
});
