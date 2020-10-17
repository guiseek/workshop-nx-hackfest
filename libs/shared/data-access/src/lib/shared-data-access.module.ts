import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './shared-data-access.service';

@NgModule({
  imports: [CommonModule],
})
export class SharedDataAccessModule {}
