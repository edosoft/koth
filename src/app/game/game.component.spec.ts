import { async, tick, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Location } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { GameComponent } from './game.component';
import { By } from '@angular/platform-browser';
import { Player } from '../player';


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Player', function(){
    var player;
    let location: Location;
    let router: Router;


    beforeEach(function(){
      player = new Player();
      
    });
  
    describe('when you are logged', function(){
  
      beforeEach(function(){
        // player.logout();
      });
  
      it("player after logout is null", function(){
        expect(player).toBeNull;
      });
   
      it('should be to redirected to login page', fakeAsync(() => {
        router.navigate(['login']);
        tick();
        expect(location.path()).toBe('/login');
      }));

      // it("is the King", function(){
      //   const leaderInfoDe = fixture.debugElement.query(By.css('.leaderInfo'));
      //   const bgColor = leaderInfoDe.nativeElement.style.backgroundColor;
      //   expect(bgColor).toBe('green');  
      // });
      
      // it("is not the King", function(){
      //   const leaderInfoDe = fixture.debugElement.query(By.css('.container-game .leaderInfo'));
      //   const bgColor = leaderInfoDe.nativeElement.style.backgroundColor;
      //   expect(bgColor).toBe('red');  
      // });
      
    });
  
    it("Has clicked Play on button", function(){
      const playButtonDe = fixture.debugElement.query(By.css('.playButton'));
      const playButtonEl = playButtonDe.nativeElement;

      player.setTime(24);
      player.setGameStatus(true);
      expect(player.getGameStatus()).toBeTruthy();
      expect(player.getTime()).toBeGreaterThan(0);
      expect(playButtonEl.hasAttribute('disabled')).toEqual(true);
    });
  
    it("Has not clicked Play on button", function(){
      player.setTime(0);
      player.setGameStatus(false);
      expect(player.getGameStatus()).toBeFalsy();
      expect(player.getTime()).toEqual(0);
    }); 
  
  });

});

