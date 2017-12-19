import { Component, OnInit, OnChanges } from '@angular/core';
import * as firebase from 'firebase/app';
import { database } from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "../../app/auth.service";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  cont: any = 0;
  leader: string;
  maxScore: any;
  gameStatus: boolean = false;
  timer: any = null;
  games: AngularFireList<any>;
  koth: AngularFireList<any>;
  currentUser: any;
  kingObservable: Observable<any[]>;
  score: any;
  

  constructor(public database: AngularFireDatabase) {
    this.games = database.list('/games');
    this.koth = database.list('/');
    const kothObservable$ : AngularFireList<any> = database.list('kingOfTheHill');
    const kothObservable = database.object('kingOfTheHill/email');
  
    // const queryObservable = this.kingObservable.switchMap(size =>
    //   database.list('/kingOfTheHill', ref => ref.equalTo('email')).valueChanges()
    // );
  }
      
  ngOnInit() {
    this.currentUser = "javi@test.com";
    this.maxScore = this.database.list('/games', ref => ref.orderByChild('score').limitToLast(1)).valueChanges();
    this.score = this.maxScore.score;
    this.maxScore.subscribe(item => {
      this.maxScore = item[0].score;
      this.leader = item[0].email;
    })
  }
  ngOnChanges() {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.maxScore = this.database.list('/games', ref => ref.orderByChild('score').limitToLast(1)).valueChanges();
    this.score = this.maxScore.score;
    this.maxScore.subscribe(item => {
      this.maxScore = item[0].score;
      this.leader = item[0].email;
    })
  }

  play(){
    this.gameStatus = true;
    console.log(this.gameStatus);
    this.timer = setInterval(this.playTimer.bind(this), 1);
    this.setKing('aitor@test.com');
  }

  playTimer(){
    this.cont++;
  }

  endGame(){
    // const queryObservable = this.kingObservable.switchMap(size =>
    //   database.list('/kingOfTheHill', ref => ref.equalTo('email')).valueChanges()
    // );
    // queryObservable.subscribe(queriedItems => {
    //   console
    // })
    clearInterval(this.timer);
    this.saveGame(this.currentUser, this.cont);
    this.cont = 0;
    this.gameStatus = false;
  }
  
  saveGame(player, cont){
    let date = new Date().getTime();
    this.games.set(date.toString() ,{ 
      email: 'javi@test.com',
      score: cont  
    });
    // Save on FIREBASE the current game result
  }

  setKing(player){
    this.koth.set('KingOfTheHill',{
        email: player
    });
  }
  getKingLeader(){
    this.games.query.orderByChild('score').limitToLast(1);

  }
}
