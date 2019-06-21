import { TestBed } from '@angular/core/testing';

import { AuthGuardCanDeactivateService } from './auth-guard-can-deactivate.service';

describe('AuthGuardCanDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardCanDeactivateService = TestBed.get(AuthGuardCanDeactivateService);
    expect(service).toBeTruthy();
  });
});
