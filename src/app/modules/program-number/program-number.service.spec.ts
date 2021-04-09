import { TestBed } from '@angular/core/testing';

import { ProgramNumberService } from './program-number.service';

describe('ProgramNumberService', () => {
  let service: ProgramNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
