import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';

import * as firebase from 'firebase/app';


describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule,AngularFireDatabaseModule
],
      providers: [AuthService,AngularFireAuth]
    });
  });

  it('should be created', inject([AuthService,AngularFireAuth], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
