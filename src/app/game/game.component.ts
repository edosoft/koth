import { Component, OnInit } from '@angular/core';
import { Player } from "../player";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player: Player;

  constructor() { }
      
  ngOnInit() {
  }

  play(player){

  }

}
