import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershasprogramListComponent } from './usershasprogram-list.component';

describe('UsershasprogramListComponent', () => {
  let component: UsershasprogramListComponent;
  let fixture: ComponentFixture<UsershasprogramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershasprogramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershasprogramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
