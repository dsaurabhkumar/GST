import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportsRoutingModule } from './exports-routing.module';
import { ExportsBaseComponent } from './exports-base/exports-base.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ExportsRoutingModule,
    SharedModule
  ],
  declarations: [ExportsBaseComponent]
})
export class ExportsModule { }
