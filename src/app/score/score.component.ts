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
  user_info: any;
  last_user_game: any;
  data  : Observable<any[]>;
  JSON = JSON;

  user = null;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.score = 0;
    this.rank = 0;
    this.record = 0;
  }

ngOnInit() {
  this.last_user_game = this.db.list('/games', ref => ref.orderByChild('email').equalTo('javier@test.com').limitToLast(1)).valueChanges();
  this.score = this.last_user_game.score;
  this.last_user_game.subscribe(item => {
    this.score = item[0].score;
  })

  this.user_info = this.db.list('/', ref => ref.orderByChild('email').equalTo('javier@test.com')).valueChanges();
  this.user_info.subscribe(item => {
    item.map(x => {
      if (x.highscore > this.record){
        this.record = x.highscore;
      }
      if (x.highrank > this.rank){
        this.rank = x.highrank;
      }
    });
  });
  }


  // this.data_refs = this.db.list('/', {}).subscribe(res => {
  //
  // }));
}
 //
 //  const temp = this.db.object('/0/email');
 //  console.log(temp);
 //
 //
 //
 //  this.data_refs = this.db.list('/users', user => {
 //    console.log("blabla: " + user);
 //    return user
 //  });
 //
 //
 //  console.log("Lista de datos: " + this.data_refs);
 //  // let path = `users/0`;
 //  console.log("Ruta: " + this.db.list('/0'));
 //  //  this.auth.currentUserObservable.subscribe(
 //  //    (user) =>{
 //  //      this.user = user;
 //  //      console.log("Este es el observable: " + user);
 //  //    });
 //  //    console.log("Este es el console: " + this.db.list('/users'));
 //  //    this.data_refs = this.db.list('/');
 //  //    this.data = this.data_refs.valueChanges();
 // }
 //
 //  getUserInfo() {
 //    // const user = this.auth.;
 //    console.log("Este es el usuario logueado")
 //    //this.rank = this.user.highrank;
 //    //this.record = this.user.highscore;
 //
 //  }
