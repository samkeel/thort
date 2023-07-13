import { TestBed } from '@angular/core/testing';

import { DraptService } from './drapt.service';

describe('DraptService', () => {
  let service: DraptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
