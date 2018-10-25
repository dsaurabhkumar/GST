import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseInvoiceRoutingModule } from './purchase-invoice-routing.module';
import { PurchaseInvoiceBaseComponent } from './purchase-invoice-base/purchase-invoice-base.component';
import { SearchPurchaseInvoiceBillComponent } from './search-purchase-invoice-bill/search-purchase-invoice-bill.component';
import { SharedModule } from '@app/shared/shared.module';
import { PurchaseInvoiceSummaryComponent } from './purchase-invoice-summary/purchase-invoice-summary.component';
import { PurchaseInvoiceListComponent } from './purchase-invoice-list/purchase-invoice-list.component';
import { AddNewPurchaseInvoiceDetailsComponent } from './add-new-purchase-invoice-details/add-new-purchase-invoice-details.component';
import { VendorInformationComponent } from './vendor-information/vendor-information.component';
import { PurchaseInvoiceDetailComponent } from './purchase-invoice-detail/purchase-invoice-detail.component';
import { ProductItemsComponent } from './product-items/product-items.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseInvoiceRoutingModule,
    SharedModule
  ],
  declarations: [PurchaseInvoiceBaseComponent, SearchPurchaseInvoiceBillComponent, PurchaseInvoiceSummaryComponent, PurchaseInvoiceListComponent, AddNewPurchaseInvoiceDetailsComponent, VendorInformationComponent, PurchaseInvoiceDetailComponent, ProductItemsComponent]
})
export class PurchaseInvoiceModule { }
