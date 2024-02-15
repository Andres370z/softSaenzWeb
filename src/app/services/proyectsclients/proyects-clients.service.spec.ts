import { TestBed } from '@angular/core/testing';

import { ProyectsClientsService } from './proyects-clients.service';

describe('ProyectsClientsService', () => {
  let service: ProyectsClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectsClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
