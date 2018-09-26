import { TestBed } from '@angular/core/testing';

import { EnvvarService } from './envvar.service';

describe('EnvvarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvvarService = TestBed.get(EnvvarService);
    expect(service).toBeTruthy();
  });
});
