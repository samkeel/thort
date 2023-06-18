import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentRatingComponent } from './sentiment-rating.component';

describe('SentimentRatingComponent', () => {
  let component: SentimentRatingComponent;
  let fixture: ComponentFixture<SentimentRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentRatingComponent]
    });
    fixture = TestBed.createComponent(SentimentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
