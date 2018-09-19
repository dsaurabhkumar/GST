import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstWidgetContainerComponent } from './gst-widget-header/gst-widget-header.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GstWidgetContainerComponent, GoogleAdsComponent, ButtonComponent],
  declarations: [GstWidgetContainerComponent, GoogleAdsComponent, ButtonComponent]
})
export class SharedModule { }
