import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportsRoutingModule } from './exports-routing.module';
import { ExportsBaseComponent } from './exports-base/exports-base.component';

@NgModule({
  imports: [
    CommonModule,
    ExportsRoutingModule
  ],
  declarations: [ExportsBaseComponent]
})
export class ExportsModule { }
