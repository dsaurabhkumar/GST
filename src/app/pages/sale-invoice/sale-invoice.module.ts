import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleInvoiceRoutingModule } from './sale-invoice-routing.module';
import { SaleInvoiceBaseComponent } from './sale-invoice-base/sale-invoice-base.component';
import { SearchInvoiceBillComponent } from './search-invoice-bill/search-invoice-bill.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SaleInvoiceRoutingModule,
    SharedModule
  ],
  declarations: [SaleInvoiceBaseComponent, SearchInvoiceBillComponent]
})
export class SaleInvoiceModule { }
