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
import { SearchProformaBillComponent } from './proforma-invoice/search-proforma-bill/search-proforma-bill.component';
import { ProformaSummaryComponent } from './proforma-invoice/proforma-summary/proforma-summary.component';
import { ProformaListComponent } from './proforma-invoice/proforma-list/proforma-list.component';
import { AddNewProformaBaseComponent } from './proforma-invoice/add-new-proforma-base/add-new-proforma-base.component';
import { ProformaDetailComponent } from './proforma-invoice/proforma-detail/proforma-detail.component';
import { ProductItemsProformaComponent } from './proforma-invoice/product-items-proforma/product-items-proforma.component';
import { AddNewCustomerProformaComponent } from './proforma-invoice/add-new-customer-proforma/add-new-customer-proforma.component';
import { AddNewTransportProformaComponent } from './proforma-invoice/add-new-transport-proforma/add-new-transport-proforma.component';
import { AddNewProductProformaComponent } from './proforma-invoice/add-new-product-proforma/add-new-product-proforma.component';
import { AddNewPackagingProformaComponent } from './proforma-invoice/add-new-packaging-proforma/add-new-packaging-proforma.component';
import { CustomerInformationProformaComponent } from './proforma-invoice/customer-information-proforma/customer-information-proforma.component';
import { SearchPurchaseOrderBillComponent } from './purchase-order/search-purchase-order-bill/search-purchase-order-bill.component';
import { PurchaseOrderSummaryComponent } from './purchase-order/purchase-order-summary/purchase-order-summary.component';
import { PurchaseOrderListComponent } from './purchase-order/purchase-order-list/purchase-order-list.component';
import { AddNewPurchaseOrderBaseComponent } from './purchase-order/add-new-purchase-order-base/add-new-purchase-order-base.component';
import { CustomerInfoPurchaseOrderComponent } from './purchase-order/customer-info-purchase-order/customer-info-purchase-order.component';
import { PurchaseOrderDetailComponent } from './purchase-order/purchase-order-detail/purchase-order-detail.component';
import { ProductItemsPurchaseOrderComponent } from './purchase-order/product-items-purchase-order/product-items-purchase-order.component';
import { AddNewCustomerPurchaseOrderComponent } from './purchase-order/add-new-customer-purchase-order/add-new-customer-purchase-order.component';
import { AddNewTransportPurchaseOrderComponent } from './purchase-order/add-new-transport-purchase-order/add-new-transport-purchase-order.component';
import { AddNewProductPurchaseOrderComponent } from './purchase-order/add-new-product-purchase-order/add-new-product-purchase-order.component';
import { AddNewPackagePurchaseOrderComponent } from './purchase-order/add-new-package-purchase-order/add-new-package-purchase-order.component';
import { SearchCreditNoteComponent } from './credit-note/search-credit-note/search-credit-note.component';
import { CreditNoteSummaryComponent } from './credit-note/credit-note-summary/credit-note-summary.component';
import { CreditNoteListComponent } from './credit-note/credit-note-list/credit-note-list.component';
import { AddNewCreditNoteBaseComponent } from './credit-note/add-new-credit-note-base/add-new-credit-note-base.component';
import { CustomerInfoCreditNoteComponent } from './credit-note/customer-info-credit-note/customer-info-credit-note.component';
import { CreditNoteDetailComponent } from './credit-note/credit-note-detail/credit-note-detail.component';
import { ProductItemsCreditNoteComponent } from './credit-note/product-items-credit-note/product-items-credit-note.component';
import { AddNewProductCreditComponent } from './credit-note/add-new-product-credit/add-new-product-credit.component';
import { AddNewPackageCreditComponent } from './credit-note/add-new-package-credit/add-new-package-credit.component';

@NgModule({
  imports: [
    CommonModule,
    OtherDocumentsRoutingModule,
    SharedModule
  ],
  declarations: [DeliveryChallanComponent, QuotationComponent, ProformaInvoiceComponent, PurchaseOrderComponent, CreditNoteComponent, DebitNoteComponent, SearchDeliveryChallanComponent, DeliveryChallanListComponent, AddNewDeliveryBaseComponent, CustomerInfoComponent, InvoiceDetailComponent, AddNewCustDelChallanComponent, AddNewTransDelChallanComponent, ProductItemsComponent, AddNewProDeliveryComponent, AddNewPackDeliveryComponent, SearchQuotationBillComponent, QuotationSummaryComponent, QuotationListComponent, AddNewQuotationBaseComponent, AddNewCustomerQuotationComponent, AddNewTransportQuotationComponent, AddNewProductQuotationComponent, AddNewPackageQuotationComponent, CustomerInformationComponent, QuotationDetailComponent, ProductItemsQuotationComponent, SearchProformaBillComponent, ProformaSummaryComponent, ProformaListComponent, AddNewProformaBaseComponent, ProformaDetailComponent, ProductItemsProformaComponent, AddNewCustomerProformaComponent, AddNewTransportProformaComponent, AddNewProductProformaComponent, AddNewPackagingProformaComponent, CustomerInformationProformaComponent, SearchPurchaseOrderBillComponent, PurchaseOrderSummaryComponent, PurchaseOrderListComponent, AddNewPurchaseOrderBaseComponent, CustomerInfoPurchaseOrderComponent, PurchaseOrderDetailComponent, ProductItemsPurchaseOrderComponent, AddNewCustomerPurchaseOrderComponent, AddNewTransportPurchaseOrderComponent, AddNewProductPurchaseOrderComponent, AddNewPackagePurchaseOrderComponent, SearchCreditNoteComponent, CreditNoteSummaryComponent, CreditNoteListComponent, AddNewCreditNoteBaseComponent, CustomerInfoCreditNoteComponent, CreditNoteDetailComponent, ProductItemsCreditNoteComponent, AddNewProductCreditComponent, AddNewPackageCreditComponent]
})
export class OtherDocumentsModule { }
