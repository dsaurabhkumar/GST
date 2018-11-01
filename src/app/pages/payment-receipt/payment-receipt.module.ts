import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentReceiptRoutingModule } from './payment-receipt-routing.module';
import { InwardPaymentComponent } from './inward-payment/inward-payment.component';
import { OutwardPaymentComponent } from './outward-payment/outward-payment.component';
import { SharedModule } from '@app/shared/shared.module';
import { SearchPaymentReceiptInwardComponent } from './search-payment-receipt-inward/search-payment-receipt-inward.component';
import { PaymentReceiptListInwardComponent } from './payment-receipt-list-inward/payment-receipt-list-inward.component';
import { AddNewPaymentReceiptComponent } from './add-new-payment-receipt/add-new-payment-receipt.component';
import { SearchPaymentReceiptOutwardComponent } from './search-payment-receipt-outward/search-payment-receipt-outward.component';
import { PaymentReceiptListOutwardComponent } from './payment-receipt-list-outward/payment-receipt-list-outward.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentReceiptRoutingModule,
    SharedModule
  ],
  declarations: [InwardPaymentComponent, OutwardPaymentComponent, SearchPaymentReceiptInwardComponent, PaymentReceiptListInwardComponent, AddNewPaymentReceiptComponent, SearchPaymentReceiptOutwardComponent, PaymentReceiptListOutwardComponent]
})
export class PaymentReceiptModule { }
