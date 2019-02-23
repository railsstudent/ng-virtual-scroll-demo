import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicScrollPhotoListComponent, BatchedScrollPhotoListComponent } from './virtual-scroll-list';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
