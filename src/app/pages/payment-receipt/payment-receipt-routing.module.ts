import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardPaymentComponent } from '@app/pages/payment-receipt/inward-payment/inward-payment.component';

const routes: Routes = [
  { path: '', component: InwardPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentReceiptRoutingModule { }
