import {KothMaterialModule} from './koth-material/koth-material.module'
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';
<<<<<<< cb66d7546a4fcad5fbf0488924eabe1a06a82aa4
import {AuthService} from './auth.service';
import { FormsModule } from '@angular/forms';
import { KothService } from './../providers/koth.service';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { SigninComponent } from './signin/signin.component';
=======
import {AuthService} from './auth.service'

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
>>>>>>> Modified table
import { LeaderListComponent } from './leader-list/leader-list.component';


export const routes: Routes = [
  { path: 'leaderList', component: LeaderListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
<<<<<<< cb66d7546a4fcad5fbf0488924eabe1a06a82aa4
    SigninComponent,
=======
>>>>>>> Modified table
    LeaderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KothMaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
<<<<<<< cb66d7546a4fcad5fbf0488924eabe1a06a82aa4
    RouterModule,
    FormsModule
=======
    RouterModule.forRoot(
      routes
    )
>>>>>>> Modified table
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
