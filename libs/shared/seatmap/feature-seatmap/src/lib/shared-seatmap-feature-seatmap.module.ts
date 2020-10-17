import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedSeatmapDataAccessModule } from '@workshop-nx/shared/seatmap/data-access';
import { FeatureSeatmapComponent } from './feature-seatmap.component';

export const sharedSeatmapFeatureSeatmapRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, SharedSeatmapDataAccessModule],
  declarations: [FeatureSeatmapComponent],
})
export class SharedSeatmapFeatureSeatmapModule {}
