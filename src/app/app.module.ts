import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ShellComponent } from './shell/shell.component';
import { VirtualScrollModule } from './virtual-scroll-list/';

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, VirtualScrollModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
