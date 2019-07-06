import { TestBed } from '@angular/core/testing';

import { TeacherResolverService } from './teacher-resolver.service';

describe('TeacherResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeacherResolverService = TestBed.get(TeacherResolverService);
    expect(service).toBeTruthy();
  });
});
