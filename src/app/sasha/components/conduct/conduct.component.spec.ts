import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductComponent } from './conduct.component';

describe('ConductComponent', () => {
  let component: ConductComponent;
  let fixture: ComponentFixture<ConductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductComponent]
    });
    fixture = TestBed.createComponent(ConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
