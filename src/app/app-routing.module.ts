import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './virtual-scroll-list/virtual-scroll.module#VirtualScrollModule',
  },
  {
    path: 'table',
    loadChildren: './virtual-scroll-table/table.module#TableModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
