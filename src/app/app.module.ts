import {KothMaterialModule} from './koth-material/koth-material.module'
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AuthService} from './auth.service'
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';

import { KothService } from './../providers/koth.service';

import { AppComponent } from './app.component';
import { LeaderListComponent } from './leader-list/leader-list.component';

export const routes: Routes = [
  { path: 'leaderList', component: LeaderListComponent },
];

var config = {
  apiKey: "AIzaSyC3cMoupowM4VP5V50ojjhO_MajTOpwNDI",
  authDomain: "koth-edosoft.firebaseapp.com",
  databaseURL: "https://koth-edosoft.firebaseio.com",
  projectId: "koth-edosoft",
  storageBucket: "koth-edosoft.appspot.com",
  messagingSenderId: "148924484247"
};

@NgModule({
  declarations: [
    AppComponent,
    LeaderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KothMaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService,KothService],
  bootstrap: [AppComponent]
})
export class AppModule { }
