import { TestBed } from '@angular/core/testing';

import { VerbalService } from './verbal.service';

describe('VerbalService', () => {
  let service: VerbalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
