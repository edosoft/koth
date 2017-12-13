import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {KothMaterialModule} from './koth-material/koth-material.module'
import { GameComponent } from './game/game.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     imports: [ KothMaterialModule],
      declarations: [
        AppComponent,
        GameComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('King of the Hill Game');
  }));
  it('should render title in a element with id=title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#title').textContent).toContain('King of the Hill Game');
  }));
});
