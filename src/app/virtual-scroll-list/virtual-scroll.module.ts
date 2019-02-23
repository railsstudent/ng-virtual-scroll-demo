import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { BasicScrollPhotoListComponent } from './basic-photo-list.component';
import { BatchedScrollPhotoListComponent } from './batched-photo-list.component';
import { PhotoItemComponent } from './photo-list-item.component';

@NgModule({
  declarations: [BatchedScrollPhotoListComponent, PhotoItemComponent, BasicScrollPhotoListComponent],
  imports: [CommonModule, ScrollingModule, SharedModule],
  exports: [BatchedScrollPhotoListComponent, PhotoItemComponent, BasicScrollPhotoListComponent],
})
export class VirtualScrollModule {}
