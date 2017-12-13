import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaderListComponent } from './leader-list.component';


describe('LeaderListComponent', () => {
  let component: LeaderListComponent;
  let fixture: ComponentFixture<LeaderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderListComponent ]
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
    expect(component.records.length).toBeLessThan(11);
  });

  it('should have less than 11 elements', function() {
    let compiled = fixture.debugElement.nativeElement;
    let elements = compiled.querySelectorAll('tr');
    expect(elements.length).toBeLessThan(11);
  });

  it("should have a descending order.", function() {
    component.sortJson();
    expect(component.isSorted(component.records)).toBeTruthy();
  });



});
