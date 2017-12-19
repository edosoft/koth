import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreComponent ]
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
    const rankingText = fixture.debugElement.queryAll(By.css('p'))[1];
    const el = rankingText.nativeElement;
    expect(el.textContent).toEqual(`Position on Ranking: ${component.rank}`);
  });

  it('should display record', () => {
    const recordText = fixture.debugElement.queryAll(By.css('p'))[2];
    const el = recordText.nativeElement;
    expect(el.textContent).toEqual(`Your current record is: ${component.record}`);
  });

  it('should have a button with name Retry', () => {
    const retryBtn = fixture.debugElement.query(By.css('button'));
    const el = retryBtn.nativeElement;
    expect(el.textContent).toEqual('Retry');
  });

  it('should have a button to retry', () => {
    const retryBtn = fixture.debugElement.query(By.css('button'));
    const el = retryBtn.nativeElement.getAttribute('routerLink');
    expect(el).toEqual('/test');
  });
});
