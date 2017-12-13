import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import * as firebase from 'firebase/app';


describe('AuthService', () => {
  beforeEach(() => {
    const firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx',
  databaseURL: 'xxx',
  storageBucket: 'xxx',
  messagingSenderId: 'xxx',
};
    TestBed.configureTestingModule({
      imports : [AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,AngularFireDatabaseModule
],
      providers: [AuthService,AngularFireAuth]
    });
  });

  it('should be created', inject([AuthService,AngularFireAuth], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
