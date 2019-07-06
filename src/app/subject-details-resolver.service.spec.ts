import { TestBed } from '@angular/core/testing';

import { SubjectDetailsResolverService } from './subject-details-resolver.service';

describe('SubjectDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectDetailsResolverService = TestBed.get(SubjectDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
