import { TestBed } from '@angular/core/testing';

import { BillsPaidService } from './bills-paid.service';

describe('BillsPaidService', () => {
  let service: BillsPaidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsPaidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
