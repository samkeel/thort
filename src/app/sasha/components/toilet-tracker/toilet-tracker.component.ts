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
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;

  form = this.fb.group({
    bmDate: [new Date(), Validators.required],
    bmAmount: [0],
    sentimentDuring: [0],
    sentimentAfter: [0],
    bmComments: '',
  });

  constructor(private bpoService: BpObserverService, private fb: FormBuilder) {}

  ngOnInit() {}
}
