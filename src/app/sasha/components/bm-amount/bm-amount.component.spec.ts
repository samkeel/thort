import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmAmountComponent } from './bm-amount.component';

describe('BmAmountComponent', () => {
  let component: BmAmountComponent;
  let fixture: ComponentFixture<BmAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmAmountComponent]
    });
    fixture = TestBed.createComponent(BmAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
