import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershasprogramUpdateComponent } from './usershasprogram-update.component';

describe('UsershasprogramUpdateComponent', () => {
  let component: UsershasprogramUpdateComponent;
  let fixture: ComponentFixture<UsershasprogramUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershasprogramUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershasprogramUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
