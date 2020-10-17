import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureShellComponent } from './feature-shell.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: FeatureShellComponent
      }
    ]),
  ],
  declarations: [FeatureShellComponent],
})
export class BookingFeatureShellModule {}
