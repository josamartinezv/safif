import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNumberListComponent } from './program-number-list.component';

describe('ProgramNumberListComponent', () => {
  let component: ProgramNumberListComponent;
  let fixture: ComponentFixture<ProgramNumberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramNumberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNumberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
