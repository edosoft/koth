import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';
import { setTimeout } from 'timers';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled;
  const appRoutes: Routes = [
    {path: 'login', component: LoginComponent },
    // {path: 'signin', component: SigninComponent },
    // {path: 'game', component: GameComponent },
    {path: '', redirectTo: 'login', pathMatch: 'full'}

];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), AngularFireAuthModule,
        AngularFireDatabaseModule, RouterModule.forRoot(appRoutes, {enableTracing: true})],
      declarations: [ LoginComponent ],
      providers: [AuthService, AngularFireAuth, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should show its name and its password', async(() => {
    component.user = 'username'; component.pass = 'pass';
    fixture.detectChanges();
    expect(compiled.querySelector('#pass').value).toEqual('pass');
    expect(compiled.querySelector('#usuario').value).toEqual('username');
  }));

  it ('should test if the buttons do exist', async(() => {
    expect(compiled.querySelector('#log')).toBeTruthy();
    expect(compiled.querySelector('#sign')).toBeTruthy();
  }));

});

  describe('Login function', () => {
    let comp: LoginComponent;
    let fixt: ComponentFixture<LoginComponent>;
    let compile;
    let auth;
    const appRoutes: Routes = [
      {path: 'login', component: LoginComponent },
      // {path: 'signin', component: SigninComponent },
      // {path: 'game', component: GameComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'}

];
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule, AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), AngularFireAuthModule,
          AngularFireDatabaseModule, RouterModule.forRoot(appRoutes, {enableTracing: true})],
        declarations: [ LoginComponent ],
        providers: [AuthService, AngularFireAuth, {provide: APP_BASE_HREF, useValue : '/' }]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixt = TestBed.createComponent(LoginComponent);
      comp = fixt.componentInstance;
      fixt.detectChanges();
      compile = fixt.debugElement.nativeElement;
      auth =  AuthService;
    });

    it('should return an error if there is no data', () => {
      comp.user = 'email@email.com'; comp.pass = '';
      comp.login_function();
      expect(comp.auth).toBeFalsy();
    });

    it('should return an error if the data is invalid',  async(() => {
      comp.user = 'email@email.com'; comp.pass = '123';
      comp.login_function();
      expect(comp.auth).toBeFalsy();
    }));
/*
    it('should return an ok if there is data', async(() => {
      comp.user = 'email@email.com'; comp.pass = '123456';
      comp.login_function();
      // auth.emailLogin('email@email.com', '123456');
      expect(comp.auth).toBeTruthy();
    }));
*/
});