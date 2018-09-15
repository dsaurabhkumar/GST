import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleInvoiceRoutingModule } from './sale-invoice-routing.module';
import { SaleInvoiceBaseComponent } from './sale-invoice-base/sale-invoice-base.component';

@NgModule({
  imports: [
    CommonModule,
    SaleInvoiceRoutingModule
  ],
  declarations: [SaleInvoiceBaseComponent]
})
export class SaleInvoiceModule { }
