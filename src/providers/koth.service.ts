import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from "angularfire2";
import { Observable } from 'rxjs/Observable';
import {firebase} from 'firebase';

@Injectable()
export class KothService {
  players: FirebaseListObservable<any[]>;
  
  constructor(private af: AngularFire) {

  }
  getFirePlayers(): FirebaseListObservable<any[]> {
    this.players = this.af.database.list('/players');
    return this.players;
  }
}
