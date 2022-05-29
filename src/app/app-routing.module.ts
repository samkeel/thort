import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
