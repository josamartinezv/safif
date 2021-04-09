import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalACreateComponent } from './verbal-a-create.component';

describe('VerbalACreateComponent', () => {
  let component: VerbalACreateComponent;
  let fixture: ComponentFixture<VerbalACreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalACreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalACreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
