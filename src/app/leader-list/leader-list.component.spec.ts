import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderListComponent } from './leader-list.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import * as firebase from '@firebase/app';

describe('LeaderListComponent', () => {
  const appRoutes: Routes = [
      { path: 'leaderList', component: LeaderListComponent }
  ];
  let component: LeaderListComponent;
  let fixture: ComponentFixture<LeaderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
        AngularFireAuthModule,
        AngularFireDatabaseModule
      ],
      declarations: [ LeaderListComponent ],
      providers: [ {provide: Router}, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have less than 11 elements", function() {
    component.records.subscribe( games => {
      expect(games.length).toBeLessThan(11);
    });
  });

  it('should have less than 11 elements in the table', function() {
    let compiled = fixture.debugElement.nativeElement;
    let elements = compiled.querySelectorAll('tr');
    expect(elements.length).toBeLessThan(11);
  });


});
