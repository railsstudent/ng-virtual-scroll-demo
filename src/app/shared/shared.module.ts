import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTitleComponent } from './app-title.component';

@NgModule({
  declarations: [AppTitleComponent],
  imports: [CommonModule, PortalModule],
  exports: [AppTitleComponent],
})
export class SharedModule {}
