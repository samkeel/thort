import { TestBed } from '@angular/core/testing';

import { ConductService } from './conduct.service';

describe('ConductService', () => {
  let service: ConductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
