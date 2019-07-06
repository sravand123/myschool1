import { TestBed } from '@angular/core/testing';

import { ClassDetailsResolverService } from './class-details-resolver.service';

describe('ClassDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassDetailsResolverService = TestBed.get(ClassDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
