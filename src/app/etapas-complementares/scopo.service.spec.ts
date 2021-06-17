import { TestBed } from '@angular/core/testing';

import { ScopoService } from './scopo.service';

describe('ScopoService', () => {
  let service: ScopoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScopoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
