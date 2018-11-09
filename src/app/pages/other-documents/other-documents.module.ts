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
import { SearchQuotationBillComponent } from './quotation/search-quotation-bill/search-quotation-bill.component';
import { QuotationSummaryComponent } from './quotation/quotation-summary/quotation-summary.component';
import { QuotationListComponent } from './quotation/quotation-list/quotation-list.component';
import { AddNewQuotationBaseComponent } from './quotation/add-new-quotation-base/add-new-quotation-base.component';
import { AddNewCustomerQuotationComponent } from './quotation/add-new-customer-quotation/add-new-customer-quotation.component';
import { AddNewTransportQuotationComponent } from './quotation/add-new-transport-quotation/add-new-transport-quotation.component';
import { AddNewProductQuotationComponent } from './quotation/add-new-product-quotation/add-new-product-quotation.component';
import { AddNewPackageQuotationComponent } from './quotation/add-new-package-quotation/add-new-package-quotation.component';
import { CustomerInformationComponent } from './quotation/customer-information/customer-information.component';
import { QuotationDetailComponent } from './quotation/quotation-detail/quotation-detail.component';
import { ProductItemsQuotationComponent } from './quotation/product-items-quotation/product-items-quotation.component';

@NgModule({
  imports: [
    CommonModule,
    OtherDocumentsRoutingModule,
    SharedModule
  ],
  declarations: [DeliveryChallanComponent, QuotationComponent, ProformaInvoiceComponent, PurchaseOrderComponent, CreditNoteComponent, DebitNoteComponent, SearchDeliveryChallanComponent, DeliveryChallanListComponent, AddNewDeliveryBaseComponent, CustomerInfoComponent, InvoiceDetailComponent, AddNewCustDelChallanComponent, AddNewTransDelChallanComponent, ProductItemsComponent, AddNewProDeliveryComponent, AddNewPackDeliveryComponent, SearchQuotationBillComponent, QuotationSummaryComponent, QuotationListComponent, AddNewQuotationBaseComponent, AddNewCustomerQuotationComponent, AddNewTransportQuotationComponent, AddNewProductQuotationComponent, AddNewPackageQuotationComponent, CustomerInformationComponent, QuotationDetailComponent, ProductItemsQuotationComponent]
})
export class OtherDocumentsModule { }
