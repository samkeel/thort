import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent,
    },
  ],
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
  @Input() maxRating = 5;
  @Input() selectedStar = 0;
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
    this.selectedStar = index + 1;
  }

  HandleMouseLeave() {
    if (this.previousSelection !== 0) {
      this.selectedStar = this.previousSelection;
    } else {
      this.selectedStar = 0;
    }
  }

  Rating(index: number) {
    this.onTouched();
    this.selectedStar = index + 1;
    this.previousSelection = this.selectedStar;
    this.starSelectedSuccess = true;
    this.onChange(this.selectedStar);
  }

  // ControlValueAccessor fields

  writeValue(value: any) {
    this.selectedStar = value;
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
