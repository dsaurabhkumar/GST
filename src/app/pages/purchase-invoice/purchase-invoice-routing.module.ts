import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseInvoiceBaseComponent } from '@app/pages/purchase-invoice/purchase-invoice-base/purchase-invoice-base.component';
import { AddNewPurchaseInvoiceDetailsComponent } from './add-new-purchase-invoice-details/add-new-purchase-invoice-details.component';

const routes: Routes = [
  { path: '', component: PurchaseInvoiceBaseComponent},
  { path: 'add-new-purchase-invoice', component: AddNewPurchaseInvoiceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseInvoiceRoutingModule { }
