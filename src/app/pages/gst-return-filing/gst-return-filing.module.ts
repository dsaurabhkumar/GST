import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GstReturnFilingRoutingModule } from './gst-return-filing-routing.module';
import { Gstr1Component } from './gstr-1/gstr-1.component';

@NgModule({
  imports: [
    CommonModule,
    GstReturnFilingRoutingModule
  ],
  declarations: [Gstr1Component]
})
export class GstReturnFilingModule { }
