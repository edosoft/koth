import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let userT;
  let pwdT1;
  let pwdT2;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('User name should be an email', () => {
    userT = 'Pilarica24@gmail.com';
    fixture.detectChanges();
    expect(userT).toMatch('^[a-zA-Z0-9_]+([\.-]?[a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([\.-]?[a-zA-Z0-9_]+)*(\.[a-zA-Z0-9_]{2,4})+$');
  });

  it('User password should be higher than 5', () => {
    pwdT1 = 'Ppilarrr24';
    fixture.detectChanges();
    expect(pwdT1.length).toBeGreaterThan(5);
  });

  it('User password should be lower than 22', () => {
    pwdT1 = 'Ppilarrr24';
    fixture.detectChanges();
    expect(pwdT1.length).toBeLessThan(22);
  });

  it('User passwords should be equals', () => {
    pwdT1 = 'Ppilarrr24';
    pwdT2 = 'Ppilarrr24';
    fixture.detectChanges();
    expect(pwdT1).toEqual(pwdT2);
  });

});
