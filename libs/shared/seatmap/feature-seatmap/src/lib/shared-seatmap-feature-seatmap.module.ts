import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FeatureSeatmapComponent } from './feature-seatmap.component';

export const sharedSeatmapFeatureSeatmapRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeatureSeatmapComponent],
})
export class SharedSeatmapFeatureSeatmapModule {}
