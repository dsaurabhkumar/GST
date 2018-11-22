import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GstReturnFilingRoutingModule } from './gst-return-filing-routing.module';
import { Gstr1Component } from './gstr-1/gstr-1.component';
import { SharedModule } from '@app/shared/shared.module';
import { GstNavComponent } from './gst-nav/gst-nav.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2clComponent } from './b2cl/b2cl.component';
import { B2csComponent } from './b2cs/b2cs.component';
import { CdnrComponent } from './cdnr/cdnr.component';
import { ExpComponent } from './exp/exp.component';
import { AtComponent } from './at/at.component';
import { AtadjComponent } from './atadj/atadj.component';
import { ExempComponent } from './exemp/exemp.component';
import { HsnComponent } from './hsn/hsn.component';
import { CdnurComponent } from './cdnur/cdnur.component';

@NgModule({
  imports: [
    CommonModule,
    GstReturnFilingRoutingModule,
    SharedModule
  ],
  declarations: [Gstr1Component, GstNavComponent, B2bComponent, B2clComponent, B2csComponent, CdnrComponent, ExpComponent, AtComponent, AtadjComponent, ExempComponent, HsnComponent, CdnurComponent]
})
export class GstReturnFilingModule { }
