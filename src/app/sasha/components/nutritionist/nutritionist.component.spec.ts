import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistComponent } from './nutritionist.component';

describe('NutritionistComponent', () => {
  let component: NutritionistComponent;
  let fixture: ComponentFixture<NutritionistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionistComponent]
    });
    fixture = TestBed.createComponent(NutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
