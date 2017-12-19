import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: number;
  rank: number;
  record: number;

  constructor(private auth: AuthService) {
    this.score = 0;
    this.rank = 0;
    this.record = 0;
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    const user = this.auth.currentUser;
  }

}
