import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NotesComponent } from './components/notes/notes.component';
import { ReadNoteComponent } from './components/read-note/read-note.component';

const routes: Routes = [
  { path: '', component: NotesComponent},
  { path: 'read', component: ReadNoteComponent},
  { path: 'edit', component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
