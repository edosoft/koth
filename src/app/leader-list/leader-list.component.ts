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
  recordsLength:number;


  constructor(private router: Router, db: AngularFireDatabase) {
    this.records =  db.list('/games', ref => ref.orderByChild('score').limitToLast(10)).valueChanges();
    console.log(this.records);
  }

  ngOnInit() {
    this.records.subscribe( games => {
      this.games = games.reverse();
      this.recordsLength = this.games.length;
      console.log(this.games);
      console.log("subscribe "+this.games.length);
      console.log("subscribe "+this.recordsLength);
    });
          console.log("subscribe "+this.recordsLength);
  }
}
