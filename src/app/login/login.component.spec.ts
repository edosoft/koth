import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should show its name and its password', async(() => {
    component.user = 'username'; component.pass = 'pass';
    fixture.detectChanges();
    expect(compiled.querySelector('#pass').value).toEqual('pass');
    expect(compiled.querySelector('#usuario').value).toEqual('username');
  }));

  it ('should test if the buttons do exist', async(() => {
    expect(compiled.querySelector('#log')).toBeTruthy();
    expect(compiled.querySelector('#sign')).toBeTruthy();
  }));

});

  describe('Login function', () => {
    let comp: LoginComponent;
    let fixt: ComponentFixture<LoginComponent>;
    let compile;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule],
        declarations: [ LoginComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixt = TestBed.createComponent(LoginComponent);
      comp = fixt.componentInstance;
      fixt.detectChanges();
      compile = fixt.debugElement.nativeElement;
    });

    it('should return an error if there is no data', () => {
      comp.user = 'user'; comp.pass = '';
      expect(comp.login_function()).toBeFalsy();
    });

    it('should return an ok if there is data', () => {
      comp.user = 'user'; comp.pass = 'pass123';
      expect(comp.login_function()).toBeTruthy();
    });

});
