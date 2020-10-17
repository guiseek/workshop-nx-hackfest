import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  SharedSeatmapFeatureSeatmapModule,
  sharedSeatmapFeatureSeatmapRoutes,
} from '@workshop-nx/shared/seatmap/feature-seatmap';

import { BookingDataAccessModule } from '@workshop-nx/booking/data-access';

import { FeatureShellComponent } from './feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    BookingDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureShellComponent
      },
      {
        path: 'shared-seatmap-feature-seatmap',
        children: sharedSeatmapFeatureSeatmapRoutes,
      },
    ]),
  ],
  declarations: [FeatureShellComponent],
})
export class BookingFeatureShellModule {}
