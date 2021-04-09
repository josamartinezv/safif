import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUpdateComponent } from './rol-update.component';

describe('RolUpdateComponent', () => {
  let component: RolUpdateComponent;
  let fixture: ComponentFixture<RolUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
