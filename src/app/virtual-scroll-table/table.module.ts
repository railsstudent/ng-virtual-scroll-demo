import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { SharedModule } from '../shared';
import { PhotoTableComponent, TableFixedSizeVirtualScrollDirective } from './photo-table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  declarations: [PhotoTableComponent, TableFixedSizeVirtualScrollDirective],
  imports: [CommonModule, TableRoutingModule, SharedModule, MatTableModule, ScrollingModule],
  exports: [PhotoTableComponent],
})
export class TableModule {}
