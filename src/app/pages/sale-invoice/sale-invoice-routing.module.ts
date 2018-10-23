import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaleInvoiceBaseComponent } from '@app/pages/sale-invoice/sale-invoice-base/sale-invoice-base.component';
import { AddNewInvoiceListComponent } from './add-new-invoice-list/add-new-invoice-list.component';

const routes: Routes = [
  { path: '', component: SaleInvoiceBaseComponent},
  { path: 'add-new-invoice-list', component: AddNewInvoiceListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleInvoiceRoutingModule { }
