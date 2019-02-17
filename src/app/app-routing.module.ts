import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualScrollListComponent } from './virtual-scroll-list/virtual-scroll-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: VirtualScrollListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
