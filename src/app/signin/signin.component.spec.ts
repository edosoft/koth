import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import {KothMaterialModule} from '../koth-material/koth-material.module';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import * as firebase from 'firebase/app';
import {APP_BASE_HREF} from '@angular/common';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let userT;
  let pwdT1;
  let pwdT2;
  const appRoutes: Routes = [
    {path: 'signin', component: SigninComponent },
    // {path: 'signin', component: SigninComponent },
    // {path: 'game', component: GameComponent },
    {path: '', redirectTo: 'signin', pathMatch: 'full'}

];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ KothMaterialModule,
        AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), AngularFireAuthModule,
        AngularFireDatabaseModule,
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        FormsModule
 ],
      declarations: [ SigninComponent ],
      providers: [AuthService, AngularFireAuth, {provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User name should be an email', () => {
    userT = 'Pilarica24@gmail.com';
    fixture.detectChanges();
    expect(userT).toMatch('^[a-zA-Z0-9_]+([\.-]?[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([\.-]?[a-zA-Z0-9_]+)*(\.[a-zA-Z0-9_]{2,4})+$');
  });

  it('User password should be higher than 5', () => {
    pwdT1 = 'Ppilarrr24';
    fixture.detectChanges();
    expect(pwdT1.length).toBeGreaterThan(5);
  });

  it('User password should be lower than 22', () => {
    pwdT1 = 'Ppilarrr24';
    fixture.detectChanges();
    expect(pwdT1.length).toBeLessThan(22);
  });

  it('User passwords should be equals', () => {
    pwdT1 = 'Ppilarrr24';
    pwdT2 = 'Ppilarrr24';
    fixture.detectChanges();
    expect(pwdT1).toEqual(pwdT2);
  });

});
