import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalUpdateComponent } from './verbal-update.component';

describe('VerbalUpdateComponent', () => {
  let component: VerbalUpdateComponent;
  let fixture: ComponentFixture<VerbalUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
