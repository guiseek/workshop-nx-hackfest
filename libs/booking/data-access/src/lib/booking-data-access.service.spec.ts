import { TestBed } from '@angular/core/testing';

import { BookingDataAccessService } from './booking-data-access.service';

describe('BookingDataAccessService', () => {
  let service: BookingDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
