import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalAListComponent } from './verbal-a-list.component';

describe('VerbalAListComponent', () => {
  let component: VerbalAListComponent;
  let fixture: ComponentFixture<VerbalAListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalAListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
