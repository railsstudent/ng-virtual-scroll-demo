import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicScrollPhotoListComponent } from './basic-photo-list.component';
import { BatchedScrollPhotoListComponent } from './batched-photo-list.component';
import { PhotoItemComponent } from './photo-list-item.component';

const routes: Routes = [
  {
    path: '',
    component: BatchedScrollPhotoListComponent,
  },
  {
    path: 'basic',
    component: BasicScrollPhotoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualScrollRoutingModule {}
export const RoutingComponents = [BatchedScrollPhotoListComponent, BasicScrollPhotoListComponent, PhotoItemComponent];
