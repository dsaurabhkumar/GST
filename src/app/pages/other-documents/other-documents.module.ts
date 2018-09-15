import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherDocumentsRoutingModule } from './other-documents-routing.module';
import { DeliveryChallanComponent } from './delivery-challan/delivery-challan.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ProformaInvoiceComponent } from './proforma-invoice/proforma-invoice.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CreditNoteComponent } from './credit-note/credit-note.component';
import { DebitNoteComponent } from './debit-note/debit-note.component';

@NgModule({
  imports: [
    CommonModule,
    OtherDocumentsRoutingModule
  ],
  declarations: [DeliveryChallanComponent, QuotationComponent, ProformaInvoiceComponent, PurchaseOrderComponent, CreditNoteComponent, DebitNoteComponent]
})
export class OtherDocumentsModule { }
