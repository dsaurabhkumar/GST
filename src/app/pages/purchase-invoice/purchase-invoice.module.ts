import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseInvoiceRoutingModule } from './purchase-invoice-routing.module';
import { PurchaseInvoiceBaseComponent } from './purchase-invoice-base/purchase-invoice-base.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseInvoiceRoutingModule
  ],
  declarations: [PurchaseInvoiceBaseComponent]
})
export class PurchaseInvoiceModule { }
