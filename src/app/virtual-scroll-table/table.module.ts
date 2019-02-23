import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { SharedModule } from '../shared';
import { PhotoTableComponent } from './photo-table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [PhotoTableComponent],
  imports: [CommonModule, TableRoutingModule, SharedModule, MatTableModule],
  exports: [PhotoTableComponent],
})
export class TableModule {}
