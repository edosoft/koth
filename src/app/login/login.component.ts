import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string;
  pass: string;
  errorCode;
  errorMessage;

  constructor(private fAuth: AuthService) {
  }

  ngOnInit() {

  }

  login_function() {
    if (this.user === '' || this.pass === '') {
      console.log("Usuario o contraseña inválidos");
      return false;
    }
    console.log("Datos válidos");
    this.fAuth.emailLogin(this.user, this.pass);
  }

}
