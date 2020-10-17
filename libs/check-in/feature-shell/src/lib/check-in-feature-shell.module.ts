import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  SharedSeatmapFeatureSeatmapModule,
  sharedSeatmapFeatureSeatmapRoutes,
} from '@workshop-nx/shared/seatmap/feature-seatmap';

import { CheckInDataAccessModule } from '@workshop-nx/check-in/data-access';

import { FeatureShellComponent } from './feature-shell.component';

@NgModule({
  imports: [
    CommonModule,
    CheckInDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureShellComponent
      },
      {
        path: 'shared-seatmap-feature-seatmap',
        children: sharedSeatmapFeatureSeatmapRoutes,
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    SharedSeatmapFeatureSeatmapModule,
  ],
  declarations: [FeatureShellComponent],
})
export class CheckInFeatureShellModule {}
