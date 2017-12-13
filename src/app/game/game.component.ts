import { Component, OnInit } from '@angular/core';
import { Player } from "../player";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player: Player;
  cont: any = 0;
  gameStatus: boolean = false;
  timer: any = null;


  constructor() { }
      
  ngOnInit() {
  }

  play(){
    this.gameStatus = true;
    console.log(this.gameStatus);
    this.timer = setInterval(this.playTimer.bind(this), 1);
  }

  playTimer(){
    this.cont++;

  }

  endGame(){
    clearInterval(this.timer);
    this.saveGame();
    this.cont = 0;
    this.gameStatus = false;
  }

  saveGame(){
    return null;
    // Save on FIREBASE the current game result
  }

}
