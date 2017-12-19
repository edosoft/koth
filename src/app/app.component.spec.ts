import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {KothMaterialModule} from './koth-material/koth-material.module';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { SigninComponent } from './signin/signin.component';
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
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
      AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule,
      AngularFireDatabaseModule,
      RouterModule,
      FormsModule
],
      declarations: [
        AppComponent,
        ScoreComponent,
        SigninComponent
      ],
      providers: [AuthService,AngularFireAuth]
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
