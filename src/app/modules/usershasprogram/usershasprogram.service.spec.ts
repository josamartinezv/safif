import { TestBed } from '@angular/core/testing';

import { UsershasprogramService } from './usershasprogram.service';

describe('UsershasprogramService', () => {
  let service: UsershasprogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsershasprogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
