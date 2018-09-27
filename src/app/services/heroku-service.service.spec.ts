import { TestBed } from '@angular/core/testing';

import { HerokuServiceService } from './heroku-service.service';

describe('HerokuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HerokuServiceService = TestBed.get(HerokuServiceService);
    expect(service).toBeTruthy();
  });
});
