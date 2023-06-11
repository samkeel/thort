import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, filter } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';

@Component({
  selector: 'app-toilet-tracker',
  templateUrl: './toilet-tracker.component.html',
  styleUrls: ['./toilet-tracker.component.scss'],
})
export class ToiletTrackerComponent implements OnInit {
  @Input() maxRating = 5;
  @Input() selectedStar = 0;
  maxRatingArr: any = [];
  previousSelection = 0;

  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  form = this.fb.group({
    bmDate: [new Date(), Validators.required],
  });

  constructor(private bpoService: BpObserverService, private fb: FormBuilder) {}

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
    this.selectedStar = index + 1;
    this.previousSelection = this.selectedStar;
  }
}
