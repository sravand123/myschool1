import { TestBed } from '@angular/core/testing';

import { ClassResolverService } from './class-resolver.service';

describe('ClassResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassResolverService = TestBed.get(ClassResolverService);
    expect(service).toBeTruthy();
  });
});
