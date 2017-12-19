import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {KothMaterialModule} from './koth-material/koth-material.module'
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';



import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
describe('AppComponent', () => {
  beforeEach(async(() => {
    const firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  databaseURL: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
};
    TestBed.configureTestingModule({
     imports: [ KothMaterialModule,
       AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,
       AngularFireDatabaseModule,
       RouterModule
],
      declarations: [
        AppComponent
      ],
      providers: [AuthService,AngularFireAuth]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('King of the Hill Game');
  }));
  it('should render title in a element with id=title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('King of the Hill Game');
  }));
});
