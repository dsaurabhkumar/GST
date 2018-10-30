import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardPaymentComponent } from '@app/pages/payment-receipt/inward-payment/inward-payment.component';
import { OutwardPaymentComponent } from './outward-payment/outward-payment.component';
import { AddNewPaymentReceiptComponent } from './add-new-payment-receipt/add-new-payment-receipt.component';

const routes: Routes = [
  { path: '', component: InwardPaymentComponent},
  { path: 'inward-payment-receipt-sales', component: InwardPaymentComponent},
  { path: 'outward-payment-receipt-purcahse', component: OutwardPaymentComponent},
  { path: 'add-new-payment-receipt', component: AddNewPaymentReceiptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentReceiptRoutingModule { }
