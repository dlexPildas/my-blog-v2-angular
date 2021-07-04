import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularFireModule,
    AngularFirestoreModule,
    StoreModule.forRoot({menustate: appReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
