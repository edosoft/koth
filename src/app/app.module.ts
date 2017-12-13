import {KothMaterialModule} from './koth-material/koth-material.module'
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';



import { environment } from '../environments/environment';
import {AuthService} from './auth.service'

import { AppComponent } from './app.component';
import { LeaderListComponent } from './leader-list/leader-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LeaderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KothMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
