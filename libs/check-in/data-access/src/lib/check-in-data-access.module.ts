import { NgModule } from '@angular/core';
import { CheckInDataAccessService } from './check-in-data-access.service';

export * from './check-in-data-access.service';

@NgModule({
  providers: [CheckInDataAccessService],
})
export class CheckInDataAccessModule {}
