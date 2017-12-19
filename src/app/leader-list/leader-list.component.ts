import { Component, OnInit } from '@angular/core';
import * as firebase from '@firebase/app';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-leader-list',
  templateUrl: './leader-list.component.html',
  styleUrls: ['./leader-list.component.css']
})

export class LeaderListComponent implements OnInit {
  records:any;
  games: any;
  user:string;


  constructor(private router: Router, db: AngularFireDatabase) {
    this.records =  db.list('/games', ref => ref.orderByChild('score')).valueChanges();
  }

  ngOnInit() {
    this.records.subscribe( games => {
      this.games = games.reverse();
      console.log(this.games);
  });

  }

  sortJson(games){
    games.sort(function(a, b){
      return b.score - a.score
    });
  }
  // isSorted(records){
  //   for (let i = 0; i < records.length; i++) {
  //     if (records[i].score < records[i+1].score){
  //       return false
  //     }
  //     return true;
  //   }
  // }
}
