import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import {NgZone} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: string;
  auth: boolean;
  constructor(private fAuth: AuthService, private router: Router, private zone: NgZone) {
  }

  ngOnInit() {
    this.fAuth.signOut();
  }

  login_function() {
    if (this.user == '' || this.pass == '') {
      console.log('Invalid User or Password');
      this.auth = false;
    }else {
      this.fAuth.emailLogin(this.user, this.pass).then(() => {
      this.auth = this.isAuth();
      this.initializeGame();
    });
    }
  }

  isAuth() {
    console.log('Correct Login: ' + this.fAuth.authenticated);
    return this.fAuth.authenticated;
  }

  initializeGame() {
    if (this.auth == true) {
      console.log("Login: Starting game");
      this.zone.run(() => {
        this.router.navigate(['/game']);
      });
    }
  }

  signIn() {
    console.log('Login: Accessing Sign in');
    this.zone.run(() => {
      this.router.navigate(['/signin']);
    });
  }

}
