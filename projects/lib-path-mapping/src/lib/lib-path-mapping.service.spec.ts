import { TestBed } from '@angular/core/testing';

import { LibPathMappingService } from './lib-path-mapping.service';

describe('LibPathMappingService', () => {
  let service: LibPathMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibPathMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
