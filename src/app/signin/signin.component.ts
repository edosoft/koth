import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userName: string;
  userPwd1: string;
  userPwd2: string;
  checkPwdEq: boolean;
  checkPwdLe: boolean;
  regexEmail: any;
  checkEm: boolean;

  constructor(private fAuth: AuthService) {
  }

  ngOnInit() {
  }

checkEmail() {
  this.regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (this.userName.match(this.regexEmail)) {
    this.checkEm = true;
  }else {
    this.checkEm = false;
  }
}
checkPassLeght() {
  if ((this.userPwd1.length >= 6) && (this.userPwd1.length <= 21)) {
    this.checkPwdLe = true;
  }else {
    this.checkPwdLe = false;
  }
}
checkPassEquals() {
  if (this.userPwd1 === this.userPwd2) {
    this.checkPwdEq = true;
  }else {
    this.checkPwdEq = false;
  }
}
createAccount() {
  this.checkEmail();
  this.checkPassLeght();
  this.checkPassEquals();
  if ((this.checkEm === true) && (this.checkPwdLe === true) && (this.checkPwdEq === true)) {
    this.fAuth.emailSignUp(this.userName, this.userPwd1);
  }
}
}

