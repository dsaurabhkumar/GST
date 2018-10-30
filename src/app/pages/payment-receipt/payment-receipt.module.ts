import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentReceiptRoutingModule } from './payment-receipt-routing.module';
import { InwardPaymentComponent } from './inward-payment/inward-payment.component';
import { OutwardPaymentComponent } from './outward-payment/outward-payment.component';
import { SharedModule } from '@app/shared/shared.module';
import { SearchPaymentReceiptInwardComponent } from './search-payment-receipt-inward/search-payment-receipt-inward.component';
import { PaymentReceiptListInwardComponent } from './payment-receipt-list-inward/payment-receipt-list-inward.component';
import { AddNewPaymentReceiptComponent } from './add-new-payment-receipt/add-new-payment-receipt.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentReceiptRoutingModule,
    SharedModule
  ],
  declarations: [InwardPaymentComponent, OutwardPaymentComponent, SearchPaymentReceiptInwardComponent, PaymentReceiptListInwardComponent, AddNewPaymentReceiptComponent]
})
export class PaymentReceiptModule { }
