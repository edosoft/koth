import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  array = [];
  score: number;
  rank: number;
  record: number;
  data_refs : AngularFireList<any>;
  data  : Observable<any[]>;

  user = null;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.score = 0;
    this.rank = 0;
    this.record = 0;
  }

ngOnInit() {
  const temp = this.db.object('/0/email');
  console.log(temp);



  this.data_refs = this.db.list('/users', user => {
    console.log("blabla: " + user);
    return user
  });


  console.log("Lista de datos: " + this.data_refs);
  // let path = `users/0`;
  console.log("Ruta: " + this.db.list('/0'));
  //  this.auth.currentUserObservable.subscribe(
  //    (user) =>{
  //      this.user = user;
  //      console.log("Este es el observable: " + user);
  //    });
  //    console.log("Este es el console: " + this.db.list('/users'));
  //    this.data_refs = this.db.list('/');
  //    this.data = this.data_refs.valueChanges();
 }

  getUserInfo() {
    // const user = this.auth.;
    console.log("Este es el usuario logueado")
    //this.rank = this.user.highrank;
    //this.record = this.user.highscore;

  }

}
