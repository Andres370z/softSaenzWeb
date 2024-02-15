import { TestBed } from '@angular/core/testing';

import { CreateTypeProductsService } from './create-type-products.service';

describe('CreateTypeProductsService', () => {
  let service: CreateTypeProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTypeProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
