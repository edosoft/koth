import { KothMaterialModule} from './koth-material/koth-material.module'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

import {AuthService} from './auth.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'game', component: GameComponent },
  {path: 'score', component: ScoreComponent},
  {path: 'leaderList', component: LeaderListComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

import { LeaderListComponent } from './leader-list/leader-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    SigninComponent,
    LeaderListComponent,
    LoginComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KothMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
