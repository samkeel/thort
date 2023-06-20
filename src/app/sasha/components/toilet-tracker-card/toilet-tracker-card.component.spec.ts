import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletTrackerCardComponent } from './toilet-tracker-card.component';

describe('ToiletTrackerCardComponent', () => {
  let component: ToiletTrackerCardComponent;
  let fixture: ComponentFixture<ToiletTrackerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToiletTrackerCardComponent]
    });
    fixture = TestBed.createComponent(ToiletTrackerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
