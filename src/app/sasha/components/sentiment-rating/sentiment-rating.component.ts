import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sentiment-rating',
  templateUrl: './sentiment-rating.component.html',
  styleUrls: ['./sentiment-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SentimentRatingComponent,
    },
  ],
})
export class SentimentRatingComponent implements OnInit, ControlValueAccessor {
  @Input() maxRating = 5;
  @Input() selectedWeight = 0;
  maxRatingArr: any = [];
  previousSelection = 0;

  onChange = (star: number) => {};

  onTouched = () => {};

  disabled: boolean = false;

  starSelectedSuccess = false;

  constructor() {}

  ngOnInit() {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  HandleMouseEnter(index: number) {
    this.selectedWeight = index + 1;
  }

  HandleMouseLeave() {
    if (this.previousSelection !== 0) {
      this.selectedWeight = this.previousSelection;
    } else {
      this.selectedWeight = 0;
    }
  }

  Rating(index: number) {
    this.onTouched();
    this.selectedWeight = index + 1;
    this.previousSelection = this.selectedWeight;
    this.starSelectedSuccess = true;
    this.onChange(this.selectedWeight);
  }

  showIcon(index: number) {
    if (index == 0) {
      return 'sentiment_very_dissatisfied';
    } else if (index == 1) {
      return 'sentiment_dissatisfied';
    } else if (index == 2) {
      return 'sentiment_neutral';
    } else if (index == 3) {
      return 'sentiment_satisfied_alt';
    } else if (index == 4) {
      return 'sentiment_very_satisfied';
    } else {
      return 'star';
    }
  }

  // ControlValueAccessor fields

  writeValue(value: any) {
    this.selectedWeight = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
  //
}
