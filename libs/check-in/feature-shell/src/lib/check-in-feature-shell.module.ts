import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  SharedSeatmapFeatureSeatmapModule,
  sharedSeatmapFeatureSeatmapRoutes,
} from '@workshop-nx/shared/seatmap/feature-seatmap';
import { FeatureShellComponent } from './feature-shell.component';

@NgModule({
  imports: [
    CommonModule,

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
