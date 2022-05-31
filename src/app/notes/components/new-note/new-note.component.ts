import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';
import { createTimeFrameRangeValidator } from '../../validators/date-range.validator';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  newNoteForm = this.fb.group(
    {
      noteCategory: ['', Validators.required],
      noteTitle: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(60),
          ],
          updateOn: 'blur',
        },
      ],
      timeFrame: [false, Validators.required],
      start: [null],
      end: [null],
      longDescription: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
          updateOn: 'blur',
        },
      ],
    },
    { validators: [createTimeFrameRangeValidator()], updateOn: 'blur' }
  );

  initialValues = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.initialValues = this.newNoteForm.value;
  }

  get newNoteTitle() {
    return this.newNoteForm.controls['noteTitle'];
  }

  get newNoteCategory() {
    return this.newNoteForm.controls['noteCategory'];
  }

  get noteTimeframe() {
    return this.newNoteForm.controls['timeFrame'];
  }

  get noteTimeFrameStart() {
    return this.newNoteForm.controls['start'];
  }

  get noteTimeFrameEnd() {
    return this.newNoteForm.controls['end'];
  }

  get noteLongDescription() {
    return this.newNoteForm.controls['longDescription'];
  }

  onClickCancel(): void {
    this.router.navigate(['notes']);
  }

  onSubmit(): void {
    const category = this.newNoteCategory.value;
    const title = this.newNoteTitle.value;
    const timeFrame = this.noteTimeframe.value;
    const timeFrameStart = this.noteTimeFrameStart.value;
    const TimeFrameEnd = this.noteTimeFrameEnd.value;
    const description = this.noteLongDescription.value;

    this.noteService.createNewNote({
      category: category,
      title: title,
      timeframe: timeFrame,
      start: timeFrameStart,
      end: TimeFrameEnd,
      description: description,
    });
    this.newNoteForm.reset(this.initialValues);
  }
}
