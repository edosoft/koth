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
      apiKey: "AIzaSyC3cMoupowM4VP5V50ojjhO_MajTOpwNDI",
      authDomain: "koth-edosoft.firebaseapp.com",
      databaseURL: "https://koth-edosoft.firebaseio.com",
      projectId: "koth-edosoft",
      storageBucket: "koth-edosoft.appspot.com",
      messagingSenderId: "148924484247"
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
