import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [ScrollingModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
