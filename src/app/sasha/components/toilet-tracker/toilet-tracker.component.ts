import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, filter } from 'rxjs';
import { BpObserverService } from 'src/app/shared/services/bp-observer.service';
import { ToiletTrackerService } from '../../services/toilet-tracker.service';
import { formatDate } from '@angular/common';
import { ToiletTracker } from '../../models/tTracker.model';
import { Timestamp } from '@angular/fire/firestore';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-toilet-tracker',
  templateUrl: './toilet-tracker.component.html',
  styleUrls: ['./toilet-tracker.component.scss'],
})
export class ToiletTrackerComponent implements OnInit {
  isHandsetPortrait$: Observable<boolean> = this.bpoService.HandsetPortrait$;
  panelOpenState = false;
  toiletEvents$!: Observable<ToiletTracker[]>;

  form = this.fb.group({
    bmDate: [formatDate, Validators.required],
    bmAmount: [0],
    sentimentDuring: [0],
    sentimentAfter: [0],
    bmComments: '',
  });

  constructor(
    private bpoService: BpObserverService,
    private fb: FormBuilder,
    private _toiletTrackerService: ToiletTrackerService
  ) {}

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    defaultParagraphSeparator: '',
    showToolbar: false,
  };

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.toiletEvents$ = this._toiletTrackerService.getAllToiletEvents();
  }

  ngOnDestroy(): void {}

  get bmDate() {
    return this.form.controls['bmDate'];
  }
  get bmAmount() {
    return this.form.controls['bmAmount'];
  }
  get sentimentDuring() {
    return this.form.controls['sentimentDuring'];
  }
  get sentimentAfter() {
    return this.form.controls['sentimentAfter'];
  }
  get bmComments() {
    return this.form.controls['bmComments'];
  }

  onSubmit() {
    const bmDate = this.bmDate.value as unknown as Timestamp;
    const bmAmount = this.bmAmount.value as number;
    const sentimentDuring = this.sentimentDuring.value as number;
    const sentimentAfter = this.sentimentAfter.value as number;
    const bmComments = this.bmComments.value as string;

    this._toiletTrackerService.createBM({
      bmDate: bmDate,
      bmAmount: bmAmount,
      sentimentAfter: sentimentAfter,
      sentimentDuring: sentimentDuring,
      bmComments: bmComments,
    });

    this.form.reset();
  }
}
