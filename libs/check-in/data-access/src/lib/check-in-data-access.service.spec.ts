import { TestBed } from '@angular/core/testing';

import { CheckInDataAccessService } from './check-in-data-access.service';

describe('CheckInDataAccessService', () => {
  let service: CheckInDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
