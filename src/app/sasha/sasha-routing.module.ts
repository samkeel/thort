import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SashaHomeComponent } from './components/main/sasha-home/sasha-home.component';

const routes: Routes = [
  {path: '', component: SashaHomeComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SashaRoutingModule { }
