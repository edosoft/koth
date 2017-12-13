import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  score: number;
  rank: number;
  record: number;

  constructor() {
    this.score = 0;
    this.rank = 0;
    this.record = 0;
  }

  ngOnInit() {

  }

}
