import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalAUpdateComponent } from './verbal-a-update.component';

describe('VerbalAUpdateComponent', () => {
  let component: VerbalAUpdateComponent;
  let fixture: ComponentFixture<VerbalAUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalAUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalAUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
