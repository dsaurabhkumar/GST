import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleInvoiceRoutingModule } from './sale-invoice-routing.module';
import { SaleInvoiceBaseComponent } from './sale-invoice-base/sale-invoice-base.component';
import { SearchInvoiceBillComponent } from './search-invoice-bill/search-invoice-bill.component';
import { SharedModule } from '@app/shared/shared.module';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  imports: [
    CommonModule,
    SaleInvoiceRoutingModule,
    SharedModule
  ],
  declarations: [SaleInvoiceBaseComponent, SearchInvoiceBillComponent, InvoiceSummaryComponent, InvoiceListComponent]
})
export class SaleInvoiceModule { }
