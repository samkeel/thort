import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BpObserverService } from './shared/services/bp-observer.service';
import { SnackbarService } from './shared/services/snackbar.service';
import { SideNavService } from './shared/services/side-nav.service';
import { UserService } from './shared/services/user.service';
import { NavigationService } from './shared/services/navigation.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    BpObserverService,
    SnackbarService,
    SideNavService,
    UserService,
    NavigationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
