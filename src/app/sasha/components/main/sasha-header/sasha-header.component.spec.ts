import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SashaHeaderComponent } from './sasha-header.component';

describe('SashaHeaderComponent', () => {
  let component: SashaHeaderComponent;
  let fixture: ComponentFixture<SashaHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SashaHeaderComponent]
    });
    fixture = TestBed.createComponent(SashaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
