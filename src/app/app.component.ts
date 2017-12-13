import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Route} from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'King of the Hill Game';
  topics_refs : AngularFireList<any>;
  topics  : Observable<any[]>;

  user = null;
  constructor(
    private auth: AuthService,
   public db: AngularFireDatabase,
   private router: Router) { }
   ngOnInit() {
    this.auth.currentUserObservable.subscribe(
      (user) => this.user = user);
      this.topics_refs = this.db.list('/topics');
      this.topics = this.topics_refs.valueChanges();
  }

}
