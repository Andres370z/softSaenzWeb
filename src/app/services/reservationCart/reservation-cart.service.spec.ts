import { TestBed } from '@angular/core/testing';

import { ReservationCartService } from './reservation-cart.service';

describe('ReservationCartService', () => {
  let service: ReservationCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
