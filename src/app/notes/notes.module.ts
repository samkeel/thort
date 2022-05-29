import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotesRoutingModule } from './notes-routing.module';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NotesComponent } from './components/notes/notes.component';
import { ReadNoteComponent } from './components/read-note/read-note.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SharedModule } from '../shared/shared.module';

const components = [
  EditCategoryComponent,
  EditNoteComponent,
  NewCategoryComponent,
  NewNoteComponent,
  NotesComponent,
  ReadNoteComponent,
  TruncatePipe,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NotesRoutingModule, SharedModule, FlexLayoutModule],
  exports: [...components],
})
export class NotesModule {}
