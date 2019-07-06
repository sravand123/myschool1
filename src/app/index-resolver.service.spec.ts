import { TestBed } from '@angular/core/testing';

import { IndexResolverService } from './index-resolver.service';

describe('IndexResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexResolverService = TestBed.get(IndexResolverService);
    expect(service).toBeTruthy();
  });
});
