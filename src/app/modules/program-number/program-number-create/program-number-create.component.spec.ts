import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNumberCreateComponent } from './program-number-create.component';

describe('ProgramNumberCreateComponent', () => {
  let component: ProgramNumberCreateComponent;
  let fixture: ComponentFixture<ProgramNumberCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramNumberCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNumberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
