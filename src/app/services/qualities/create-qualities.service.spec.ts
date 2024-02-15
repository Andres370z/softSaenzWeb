import { TestBed } from '@angular/core/testing';

import { CreateQualitiesService } from './create-qualities.service';

describe('CreateQualitiesService', () => {
  let service: CreateQualitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateQualitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
