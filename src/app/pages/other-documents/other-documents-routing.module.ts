import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryChallanComponent } from '@app/pages/other-documents/delivery-challan/delivery-challan.component';
import { QuotationComponent } from '@app/pages/other-documents/quotation/quotation.component';
import { ProformaInvoiceComponent } from '@app/pages/other-documents/proforma-invoice/proforma-invoice.component';
import { PurchaseOrderComponent } from '@app/pages/other-documents/purchase-order/purchase-order.component';
import { CreditNoteComponent } from '@app/pages/other-documents/credit-note/credit-note.component';
import { DebitNoteComponent } from '@app/pages/other-documents/debit-note/debit-note.component';

const routes: Routes = [
  { path: '', component: DeliveryChallanComponent},
  { path: 'quotation', component: QuotationComponent}, 
  { path: 'proforma-invoice', component: ProformaInvoiceComponent}, 
  { path: 'purchase-order', component: PurchaseOrderComponent}, 
  { path: 'credit-note', component: CreditNoteComponent}, 
  { path: 'debit-note', component: DebitNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherDocumentsRoutingModule { }
