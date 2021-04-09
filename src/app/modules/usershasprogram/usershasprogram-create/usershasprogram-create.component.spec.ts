import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershasprogramCreateComponent } from './usershasprogram-create.component';

describe('UsershasprogramCreateComponent', () => {
  let component: UsershasprogramCreateComponent;
  let fixture: ComponentFixture<UsershasprogramCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershasprogramCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershasprogramCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
