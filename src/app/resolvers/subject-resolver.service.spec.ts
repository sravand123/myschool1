import { TestBed } from '@angular/core/testing';

import { SubjectResolverService } from './subject-resolver.service';

describe('SubjectResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectResolverService = TestBed.get(SubjectResolverService);
    expect(service).toBeTruthy();
  });
});
