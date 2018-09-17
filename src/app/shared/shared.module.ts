import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstWidgetContainerComponent } from './gst-widget-container/gst-widget-container.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GstWidgetContainerComponent, GoogleAdsComponent],
  declarations: [GstWidgetContainerComponent, GoogleAdsComponent]
})
export class SharedModule { }
