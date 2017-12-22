import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ScoreComponent } from './score.component';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {KothMaterialModule} from '../koth-material/koth-material.module'
import { Routes, RouterModule } from '@angular/router';
import * as firebase from 'firebase/app';
import { environment } from '../../environments/environment';


describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ KothMaterialModule,
        AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),AngularFireAuthModule,
        AngularFireDatabaseModule,
        RouterModule
      ],
      declarations: [ ScoreComponent ],
      providers: [AuthService,AngularFireAuth],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const de = fixture.debugElement.query(By.css('.title'));
    const el = de.nativeElement;
    expect(el.textContent).toEqual('Score');
  });

  it('should display score', () => {
    component.record = 2;
    component.score = 0;
    fixture.detectChanges();
    const scoreText = fixture.debugElement.query(By.css('p'));
    const el = scoreText.nativeElement;
    expect(el.textContent).toEqual(`Your score is: ${component.score}`);
  });

  it('should congrat you if you beat your record', () => {
    component.record = 0;
    component.score = 2;
    fixture.detectChanges();
    const scoreText = fixture.debugElement.query(By.css('p'));
    const el = scoreText.nativeElement;
    expect(el.textContent).toEqual(`Congratulations, you have beaten your record: ${component.score}`);
  });

  it('should display ranking position', () => {
    // Array of elements
    // const de = fixture.debugElement.queryAll(By.css('p'));
    // const el = de.map(el => el.nativeElement);
    // el.map(x => expect(x.textContent).toEqual(`Your score is: ${component.score}`));
    component.record = 0;
    component.score = 2;
    fixture.detectChanges();
    const rankingText = fixture.debugElement.queryAll(By.css('p'))[1];
    const el = rankingText.nativeElement;
    expect(el.textContent).toEqual(`Position on Ranking: ${component.rank}`);
  });

  it('should display record', () => {
    component.record = 0;
    component.score = 2;
    fixture.detectChanges();
    const recordText = fixture.debugElement.queryAll(By.css('p'))[2];
    const el = recordText.nativeElement;
    expect(el.textContent).toEqual(`Your current record is: ${component.record}`);
  });

  it('should have a button with name Retry', () => {
    const retryBtn = fixture.debugElement.query(By.css('button'));
    const el = retryBtn.nativeElement;
    expect(el.textContent).toEqual('Retry');
  });
});
