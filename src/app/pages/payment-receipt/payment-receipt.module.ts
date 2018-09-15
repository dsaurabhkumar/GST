import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentReceiptRoutingModule } from './payment-receipt-routing.module';
import { InwardPaymentComponent } from './inward-payment/inward-payment.component';
import { OutwardPaymentComponent } from './outward-payment/outward-payment.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentReceiptRoutingModule
  ],
  declarations: [InwardPaymentComponent, OutwardPaymentComponent]
})
export class PaymentReceiptModule { }
