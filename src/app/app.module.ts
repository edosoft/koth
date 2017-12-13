import {KothMaterialModule} from './koth-material/koth-material.module'
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import {AuthService} from './auth.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SigninComponent } from './signin/signin.component';
=======
import { SignComponent } from './sign/sign.component';
>>>>>>> 4083ea42877ab259f5b5b431d25e419664ba2519


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SigninComponent
=======
    SignComponent
>>>>>>> 4083ea42877ab259f5b5b431d25e419664ba2519
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KothMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
