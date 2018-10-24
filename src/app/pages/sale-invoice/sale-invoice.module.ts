import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleInvoiceRoutingModule } from './sale-invoice-routing.module';
import { SaleInvoiceBaseComponent } from './sale-invoice-base/sale-invoice-base.component';
import { SearchInvoiceBillComponent } from './search-invoice-bill/search-invoice-bill.component';
import { SharedModule } from '@app/shared/shared.module';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { AddNewInvoiceListComponent } from './add-new-invoice-list/add-new-invoice-list.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { AddCustSaleInvoiceModalComponent } from './add-cust-sale-invoice-modal/add-cust-sale-invoice-modal.component';

@NgModule({
  imports: [
    CommonModule,
    SaleInvoiceRoutingModule,
    SharedModule
  ],
  declarations: [SaleInvoiceBaseComponent, SearchInvoiceBillComponent, InvoiceSummaryComponent, InvoiceListComponent, AddNewInvoiceListComponent, CustomerInfoComponent, InvoiceDetailsComponent, ProductItemsComponent, AddCustSaleInvoiceModalComponent]
})
export class SaleInvoiceModule { }
