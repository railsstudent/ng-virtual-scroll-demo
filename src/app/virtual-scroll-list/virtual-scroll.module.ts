import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { RoutingComponents, VirtualScrollRoutingModule } from './virtual-scroll-routing.module';

@NgModule({
  declarations: RoutingComponents,
  imports: [CommonModule, ScrollingModule, SharedModule, VirtualScrollRoutingModule],
  exports: RoutingComponents,
})
export class VirtualScrollModule {}
