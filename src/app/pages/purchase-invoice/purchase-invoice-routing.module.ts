import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseInvoiceBaseComponent } from '@app/pages/purchase-invoice/purchase-invoice-base/purchase-invoice-base.component';

const routes: Routes = [
  { path: '', component: PurchaseInvoiceBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseInvoiceRoutingModule { }
