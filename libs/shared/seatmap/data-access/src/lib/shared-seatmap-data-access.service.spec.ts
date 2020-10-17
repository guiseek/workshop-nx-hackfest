/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedSeatmapDataAccessService } from './shared-seatmap-data-access.service';

describe('Service: SharedSeatmapDataAccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedSeatmapDataAccessService]
    });
  });

  it('should ...', inject([SharedSeatmapDataAccessService], (service: SharedSeatmapDataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
