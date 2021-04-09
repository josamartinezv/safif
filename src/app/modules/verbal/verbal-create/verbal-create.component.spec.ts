import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalCreateComponent } from './verbal-create.component';

describe('VerbalCreateComponent', () => {
  let component: VerbalCreateComponent;
  let fixture: ComponentFixture<VerbalCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
