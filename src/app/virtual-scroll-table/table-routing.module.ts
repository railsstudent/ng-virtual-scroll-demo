import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoTableComponent } from './photo-table.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}
