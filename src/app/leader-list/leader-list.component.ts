import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader-list',
  templateUrl: './leader-list.component.html',
  styleUrls: ['./leader-list.component.css']
})
export class LeaderListComponent implements OnInit {
  records:any = [
    {
      user: 'pepe',
      score: 20
    },
    {
      user: 'juan',
      score: 21
    },
    {
      user: 'juana',
      score: 9
    },
    {
      user: 'hermana',
      score: 232
    }
  ];

  user:string;

  constructor() { }

  ngOnInit() {
    
  }
  sortJson(){
    this.records.sort(function(a, b){
      return b.score - a.score
    });
  }
  isSorted(records){
    for (let i = 0; i < records.length; i++) {
      if (records[i].score < records[i+1].score){
        return false
    }
    return true;
  }





}
