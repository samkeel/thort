import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletTrackerComponent } from './toilet-tracker.component';

describe('ToiletTrackerComponent', () => {
  let component: ToiletTrackerComponent;
  let fixture: ComponentFixture<ToiletTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToiletTrackerComponent]
    });
    fixture = TestBed.createComponent(ToiletTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
