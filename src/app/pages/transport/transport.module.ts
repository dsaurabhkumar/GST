import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportBaseComponent } from './transport-base/transport-base.component';
import { TransportChargesComponent } from './transport-charges/transport-charges.component';

@NgModule({
  imports: [
    CommonModule,
    TransportRoutingModule
  ],
  declarations: [TransportBaseComponent, TransportChargesComponent]
})
export class TransportModule { }
