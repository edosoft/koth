import { Component, OnInit, OnChanges, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import { database } from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "../../app/auth.service";
import { Router } from '@angular/router';

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
  currentKing: AngularFireList<any>;
  kingObservable: Observable<any[]>;
  currentUser: any;
  score: any;


  constructor(public database: AngularFireDatabase,private user: AuthService,private zone: NgZone, private router: Router) {

    this.games = database.list('/games');
    this.koth = database.list('/');
    this.currentKing = database.list('/KingOfTheHill')
    const kothObservable$ : AngularFireList<any> = database.list('kingOfTheHill');
    const kothObservable = database.object('kingOfTheHill/email');

  }

  ngOnInit() {
    this.currentUser = this.user.currentUser;
    this.maxScore = this.database.list('/games', ref => ref.orderByChild('score').limitToLast(1)).valueChanges();
    this.score = this.maxScore.score;
    // this.maxScore.subscribe(item => {
    //   this.maxScore = item[0].score;
    //   this.leader = item[0].email;
    // console.log(this.currentUser);
    // })
    this.setKingScore()
  }
  setKingScore(){
    this.maxScore = this.database.list('/games', ref => ref.orderByChild('score').limitToLast(1)).valueChanges();
    this.maxScore.subscribe(item => {
      this.maxScore = item[0].score;
      this.leader = item[0].email;
    console.log(this.currentUser);
    })
  }
  play(){
    this.gameStatus = true;
    console.log(this.gameStatus);
    this.timer = setInterval(this.playTimer.bind(this), 1);
    this.setKing(this.currentUser);
    this.getKing();
    this.setKingScore()
  }

  playTimer(){
    this.cont++;
  }

  endGame(){
    clearInterval(this.timer);
    this.saveGame(this.currentUser, this.cont);
    this.cont = 0;
    this.gameStatus = false;
    this.router.navigate(['/score']);
  }

  saveGame(player, cont){
    let date = new Date().getTime();
    this.games.set(date.toString() ,{
      email: player,
      score: cont
    });
  }

  setKing(player){
    this.koth.set('KingOfTheHill',{
        email: player
    });
  }
  getKing(){
    this.currentKing.valueChanges().subscribe((data) => {
      console.log(data[0]);
      if (data[0] != this.currentUser){
        this.endGame()
      }
    });
  }
  showScoreBoard() {
    this.zone.run(() => {
      this.router.navigate(['/app-score']);
      });
    }
}
