import { TestBed } from '@angular/core/testing';

import { ToiletTrackerService } from './toilet-tracker.service';

describe('ToiletTrackerService', () => {
  let service: ToiletTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToiletTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
