import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/main/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./shared/components/login/login.component').then(
        (component) => component.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./shared/components/sign-up/sign-up.component').then(
        (component) => component.SignUpComponent
      ),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'sasha',
    loadChildren: () =>
      import('./sasha/sasha.module').then((m) => m.SashaModule),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './shared/components/page-not-found/page-not-found.component'
      ).then((component) => component.PageNotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
