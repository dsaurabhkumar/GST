import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstWidgetContainerComponent } from './gst-widget-header/gst-widget-header.component';
import { GoogleAdsComponent } from './google-ads/google-ads.component';
import { ButtonComponent } from './button/button.component';
import { WidgetHeaderWithBtnComponent } from './widget-header-with-btn/widget-header-with-btn.component';
import { Components } from './';
import { ModalComponent } from './modal/modal.component';
import { LikeDislikeButtonsComponent } from './like-dislike-buttons/like-dislike-buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ Components ],
  declarations: [GstWidgetContainerComponent, GoogleAdsComponent, ButtonComponent, WidgetHeaderWithBtnComponent, ModalComponent, LikeDislikeButtonsComponent]
})
export class SharedModule { }
