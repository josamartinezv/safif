import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNumberUpdateComponent } from './program-number-update.component';

describe('ProgramNumberUpdateComponent', () => {
  let component: ProgramNumberUpdateComponent;
  let fixture: ComponentFixture<ProgramNumberUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramNumberUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNumberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
