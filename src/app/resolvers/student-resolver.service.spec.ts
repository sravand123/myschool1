import { TestBed } from '@angular/core/testing';

import { StudentResolverService } from './student-resolver.service';

describe('StudentResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentResolverService = TestBed.get(StudentResolverService);
    expect(service).toBeTruthy();
  });
});
