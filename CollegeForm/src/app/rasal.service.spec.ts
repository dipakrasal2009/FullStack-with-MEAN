import { TestBed } from '@angular/core/testing';

import { RasalService } from './rasal.service';

describe('RasalService', () => {
  let service: RasalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RasalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
