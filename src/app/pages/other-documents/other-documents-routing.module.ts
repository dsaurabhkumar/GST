import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryChallanComponent } from '@app/pages/other-documents/delivery-challan/delivery-challan.component';
import { QuotationComponent } from '@app/pages/other-documents/quotation/quotation.component';
import { ProformaInvoiceComponent } from '@app/pages/other-documents/proforma-invoice/proforma-invoice.component';
import { PurchaseOrderComponent } from '@app/pages/other-documents/purchase-order/purchase-order.component';
import { CreditNoteComponent } from '@app/pages/other-documents/credit-note/credit-note.component';
import { DebitNoteComponent } from '@app/pages/other-documents/debit-note/debit-note.component';
import { AddNewDeliveryBaseComponent } from './delivery-challan/add-new-delivery-base/add-new-delivery-base.component';
import { AddNewQuotationBaseComponent } from './quotation/add-new-quotation-base/add-new-quotation-base.component';
import { AddNewProformaBaseComponent } from './proforma-invoice/add-new-proforma-base/add-new-proforma-base.component';
import { AddNewPurchaseOrderBaseComponent } from './purchase-order/add-new-purchase-order-base/add-new-purchase-order-base.component';

const routes: Routes = [
  { path: '', redirectTo: 'delivery-challan', pathMatch: "full"},   
  { path: 'delivery-challan', component: DeliveryChallanComponent}, 
  { path: 'delivery-challan/add-new-delivery-challan', component: AddNewDeliveryBaseComponent },

  { path: 'quotation', component: QuotationComponent}, 
  { path: 'quotation/add-new-quotation-base', component: AddNewQuotationBaseComponent },

  { path: 'proforma-invoice', component: ProformaInvoiceComponent}, 
  { path: 'proforma-invoice/add-new-proforma-base', component: AddNewProformaBaseComponent },

  { path: 'purchase-order', component: PurchaseOrderComponent}, 
  { path: 'purchase-order/add-new-purchase-order-base', component: AddNewPurchaseOrderBaseComponent },

  { path: 'credit-note', component: CreditNoteComponent}, 

  { path: 'debit-note', component: DebitNoteComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherDocumentsRoutingModule { }
