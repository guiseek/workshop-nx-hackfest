import { NgModule } from '@angular/core';
import { BookingDataAccessService } from './booking-data-access.service';

export * from './booking-data-access.service';

@NgModule({
  providers: [BookingDataAccessService],
})
export class BookingDataAccessModule {}
