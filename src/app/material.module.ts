import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule {}
