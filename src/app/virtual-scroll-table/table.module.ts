import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { PhotoTableComponent } from './photo-table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [PhotoTableComponent],
  imports: [CommonModule, TableRoutingModule, SharedModule],
  exports: [PhotoTableComponent],
})
export class TableModule {}
