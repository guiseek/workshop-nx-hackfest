/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedDataAccessService } from './shared-data-access.service';

describe('Service: SharedDataAccess', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDataAccessService]
    });
  });

  it('should ...', inject([SharedDataAccessService], (service: SharedDataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
