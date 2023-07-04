import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BpObserverService } from './shared/services/bp-observer.service';
import { SideNavServiceService } from './shared/services/side-nav-service.service';
import { SnackbarService } from './shared/services/snackbar.service';
import { UserService } from './shared/services/user.service';
import { LoaderService } from './shared/services/loader.service';
import { HomeComponent } from './shared/components/main/home/home.component';
import { HeaderComponent } from './shared/components/main/header/header.component';
import { NavComponent } from './shared/components/main/nav/nav.component';
import { TopOfPageComponent } from './shared/components/top-of-page/top-of-page.component';
// ---
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserNavListComponent } from './shared/components/main/user-nav-list/user-nav-list.component';

//kolkov rich text editor
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    TopOfPageComponent,
    UserNavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    AngularEditorModule
  ],
  providers: [
    BpObserverService,
    SideNavServiceService,
    SnackbarService,
    UserService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
