import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleInvoiceBaseComponent } from '@app/pages/sale-invoice/sale-invoice-base/sale-invoice-base.component';

const routes: Routes = [
  { path: '', component: SaleInvoiceBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleInvoiceRoutingModule { }
