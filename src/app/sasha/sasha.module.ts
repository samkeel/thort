import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SashaRoutingModule } from './sasha-routing.module';
import { SashaHomeComponent } from './components/main/sasha-home/sasha-home.component';
import { SashaHeaderComponent } from './components/main/sasha-header/sasha-header.component';
import { OverviewComponent } from './components/overview/overview.component';
// 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ToiletTrackerComponent } from './components/toilet-tracker/toilet-tracker.component';
import { NutritionistComponent } from './components/nutritionist/nutritionist.component';
import { DrAppointmentsComponent } from './components/dr-appointments/dr-appointments.component';


@NgModule({
  declarations: [SashaHomeComponent, SashaHeaderComponent, OverviewComponent, ToiletTrackerComponent, NutritionistComponent, DrAppointmentsComponent],
  imports: [
    CommonModule,
    SashaRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
  ],
})
export class SashaModule {}
