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

<<<<<<< 3d6448538636242b33cb24bd3a709d5a6840fe9c
import { environment } from '../environments/environment';
import {AuthService} from './auth.service';
import { FormsModule } from '@angular/forms';
=======
import { KothService } from './../providers/koth.service';
>>>>>>> Pull rebase DONE

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { SigninComponent } from './signin/signin.component';
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
    ScoreComponent,
    SigninComponent,
    LeaderListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KothMaterialModule,
<<<<<<< 3d6448538636242b33cb24bd3a709d5a6840fe9c
    AngularFireModule.initializeApp(environment.firebase),
=======
<<<<<<< 93531e7f787fd82e2e5453b90b1421a954e5b0fb
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
>>>>>>> Pull rebase DONE
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService],
=======
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [KothService],
>>>>>>> WIP leaderListComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
