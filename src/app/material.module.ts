import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MatListModule, MatSidenavModule } from '@angular/material';

@NgModule({
  exports: [ScrollingModule, MatSidenavModule, MatListModule],
})
export class MaterialModule {}
