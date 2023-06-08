import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashaHomeComponent } from './sasha-home.component';

describe('SashaHomeComponent', () => {
  let component: SashaHomeComponent;
  let fixture: ComponentFixture<SashaHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SashaHomeComponent]
    });
    fixture = TestBed.createComponent(SashaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
