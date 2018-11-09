import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherDocumentsRoutingModule } from './other-documents-routing.module';
import { DeliveryChallanComponent } from './delivery-challan/delivery-challan.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ProformaInvoiceComponent } from './proforma-invoice/proforma-invoice.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CreditNoteComponent } from './credit-note/credit-note.component';
import { DebitNoteComponent } from './debit-note/debit-note.component';
import { SearchDeliveryChallanComponent } from './delivery-challan/search-delivery-challan/search-delivery-challan.component';
import { DeliveryChallanListComponent } from './delivery-challan/delivery-challan-list/delivery-challan-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { AddNewDeliveryBaseComponent } from './delivery-challan/add-new-delivery-base/add-new-delivery-base.component';
import { CustomerInfoComponent } from './delivery-challan/customer-info/customer-info.component';
import { InvoiceDetailComponent } from './delivery-challan/invoice-detail/invoice-detail.component';
import { AddNewCustDelChallanComponent } from './delivery-challan/add-new-cust-del-challan/add-new-cust-del-challan.component';
import { AddNewTransDelChallanComponent } from './delivery-challan/add-new-trans-del-challan/add-new-trans-del-challan.component';
import { ProductItemsComponent } from './delivery-challan/product-items/product-items.component';
import { AddNewProDeliveryComponent } from './delivery-challan/add-new-pro-delivery/add-new-pro-delivery.component';
import { AddNewPackDeliveryComponent } from './delivery-challan/add-new-pack-delivery/add-new-pack-delivery.component';

@NgModule({
  imports: [
    CommonModule,
    OtherDocumentsRoutingModule,
    SharedModule
  ],
  declarations: [DeliveryChallanComponent, QuotationComponent, ProformaInvoiceComponent, PurchaseOrderComponent, CreditNoteComponent, DebitNoteComponent, SearchDeliveryChallanComponent, DeliveryChallanListComponent, AddNewDeliveryBaseComponent, CustomerInfoComponent, InvoiceDetailComponent, AddNewCustDelChallanComponent, AddNewTransDelChallanComponent, ProductItemsComponent, AddNewProDeliveryComponent, AddNewPackDeliveryComponent]
})
export class OtherDocumentsModule { }
