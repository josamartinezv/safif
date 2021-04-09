import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalAViewComponent } from './verbal-a-view.component';

describe('VerbalAViewComponent', () => {
  let component: VerbalAViewComponent;
  let fixture: ComponentFixture<VerbalAViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalAViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalAViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
