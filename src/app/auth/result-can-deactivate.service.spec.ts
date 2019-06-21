import { TestBed } from '@angular/core/testing';

import { ResultCanDeactivateService } from './result-can-deactivate.service';

describe('ResultCanDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultCanDeactivateService = TestBed.get(ResultCanDeactivateService);
    expect(service).toBeTruthy();
  });
});
