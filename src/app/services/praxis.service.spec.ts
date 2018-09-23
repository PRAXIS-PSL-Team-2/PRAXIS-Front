import { TestBed } from '@angular/core/testing';

import { PraxisService } from './praxis.service';

describe('PraxisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PraxisService = TestBed.get(PraxisService);
    expect(service).toBeTruthy();
  });
});
