import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import {KothMaterialModule} from './koth-material/koth-material.module';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { FormsModule } from '@angular/forms';
import { LeaderListComponent } from './leader-list/leader-list.component';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  const appRoutes: Routes = [
      { path: 'leaderList', component: LeaderListComponent }
  ];
  beforeEach(async(() => {
    const firebaseConfig = {

  apiKey: 'AIzaSyC3cMoupowM4VP5V50ojjhO_MajTOpwNDI',
  authDomain: 'koth-edosoft.firebaseapp.com',
  databaseURL: 'https://koth-edosoft.firebaseio.com',
  storageBucket: 'koth-edosoft.appspot.com',
  messagingSenderId: '148924484247',

};
  TestBed.configureTestingModule({
    imports: [ KothMaterialModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFireDatabaseModule,
      RouterModule.forRoot(appRoutes, {enableTracing: true}),
      FormsModule
],

    declarations: [
      AppComponent,
      LeaderListComponent,
      SigninComponent,
      ScoreComponent
    ],
    providers: [AuthService, AngularFireAuth, {provide: APP_BASE_HREF, useValue : '/' }]
  }).compileComponents();
}));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app'`,() => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('King of the Hill Game');
  });
  it('should render title in a element with id=title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('King of the Hill Game');
  });
});
