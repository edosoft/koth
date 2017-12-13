import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userName: string;
  userPwd1: string;
  userPwd2: string;

  constructor() {
  }

  ngOnInit() {
  }

}
