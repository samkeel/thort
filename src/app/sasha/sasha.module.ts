import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SashaRoutingModule } from './sasha-routing.module';
import { SashaHomeComponent } from './components/main/sasha-home/sasha-home.component';
import { SashaHeaderComponent } from './components/main/sasha-header/sasha-header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ToiletTrackerComponent } from './components/toilet-tracker/toilet-tracker.component';
import { NutritionistComponent } from './components/nutritionist/nutritionist.component';
import { DrAppointmentsComponent } from './components/dr-appointments/dr-appointments.component';
//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    SashaHomeComponent,
    SashaHeaderComponent,
    OverviewComponent,
    ToiletTrackerComponent,
    NutritionistComponent,
    DrAppointmentsComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    SashaRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class SashaModule {}
