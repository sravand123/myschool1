import { TestBed } from '@angular/core/testing';

import { AllInOneService } from './all-in-one.service';

describe('AllInOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllInOneService = TestBed.get(AllInOneService);
    expect(service).toBeTruthy();
  });
});
