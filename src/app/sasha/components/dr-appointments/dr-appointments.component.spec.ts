import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAppointmentsComponent } from './dr-appointments.component';

describe('DrAppointmentsComponent', () => {
  let component: DrAppointmentsComponent;
  let fixture: ComponentFixture<DrAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrAppointmentsComponent]
    });
    fixture = TestBed.createComponent(DrAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
