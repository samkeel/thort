import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { ReadNoteComponent } from './components/read-note/read-note.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'read', component: ReadNoteComponent },
  { path: 'edit', component: EditNoteComponent },
  { path: 'newnote', component: NewNoteComponent },
  { path: 'newcategory', component: NewCategoryComponent },
  { path: 'editcategory', component: EditCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
