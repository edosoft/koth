import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';

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
  games: any;
  user_info: any;
  last_user_game: any;
  data  : Observable<any[]>;
  JSON = JSON;
  currentUser:any;
  user = null;

  constructor(private auth: AuthService, public db: AngularFireDatabase, private route: Router, private zone: NgZone) {
    this.games =  this.db.list('/games', ref => ref.orderByChild('score')).valueChanges();
  }

  ngOnInit() {
      this.currentUser = this.auth.currentUser;
      this.last_user_game = this.db.list('/games', ref => ref.orderByChild('email').equalTo(this.currentUser).limitToLast(1)).valueChanges();
      this.last_user_game.subscribe((score) => {
        this.score = score[0].score;
      });
      this.games.subscribe((game) => {
        game = game.reverse();
        for (var i = 0; i < game.length; i++){
          if (game[i].email == this.currentUser){
            this.rank = i + 1;
            this.record = game[i].score;
            break;
          }
        }
      })
    }

  onPressRetry(){
      this.route.navigate(['/game']);
  }

}
