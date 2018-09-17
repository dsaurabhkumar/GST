import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstWidgetContainerComponent } from './gst-widget-container/gst-widget-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GstWidgetContainerComponent],
  declarations: [GstWidgetContainerComponent]
})
export class SharedModule { }
