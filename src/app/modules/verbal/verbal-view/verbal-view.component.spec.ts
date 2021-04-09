import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalViewComponent } from './verbal-view.component';

describe('VerbalViewComponent', () => {
  let component: VerbalViewComponent;
  let fixture: ComponentFixture<VerbalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
