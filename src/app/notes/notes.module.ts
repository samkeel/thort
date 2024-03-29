import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { EditNoteDialogComponent } from './dialogs/edit-note-dialog/edit-note-dialog.component';
import { NewNoteDialogComponent } from './dialogs/new-note-dialog/new-note-dialog.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    NoteComponent,
    NotesComponent,
    NotesListComponent,
    EditNoteDialogComponent,
    NewNoteDialogComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    AngularEditorModule
  ]
})
export class NotesModule { }
