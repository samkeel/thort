import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Note } from '../../models/note.model';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-new-note-dialog',
  templateUrl: './new-note-dialog.component.html',
  styleUrls: ['./new-note-dialog.component.scss']
})
export class NewNoteDialogComponent {
  newNoteForm = this.fb.group({
    title: ['', { validators: [Validators.required], updateOn: 'blur' }],
    content: [''],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public note: Note,
    private dialogRef: MatDialogRef<NewNoteDialogComponent>
  ) {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.newNoteForm.value);
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    defaultParagraphSeparator: '',
    showToolbar: false,
    sanitize: true,
    placeholder: 'Enter comments here...',
  };


}

export function openNewNoteDialog(dialog: MatDialog) {
  const dialogRef = dialog.open(NewNoteDialogComponent);

  return dialogRef.afterClosed();
}
