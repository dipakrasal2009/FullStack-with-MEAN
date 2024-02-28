import { TestBed } from '@angular/core/testing';

import { DipakService } from './dipak.service';

describe('DipakService', () => {
  let service: DipakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DipakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
