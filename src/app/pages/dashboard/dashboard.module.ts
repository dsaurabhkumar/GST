import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { DashboardRoutingModule } from './dashboard-routing';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { TotalInvoiceComponent } from './total-invoice/total-invoice.component';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import { InvoiceCountSummaryComponent } from './invoice-count-summary/invoice-count-summary.component';
import { InvoiceAmountSummaryComponent } from './invoice-amount-summary/invoice-amount-summary.component';
import { SalesInvoiceDueComponent } from './sales-invoice-due/sales-invoice-due.component';
import { PurchaseInvoiceDueComponent } from './purchase-invoice-due/purchase-invoice-due.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardBaseComponent, AccountSummaryComponent, TotalInvoiceComponent, InvoiceSummaryComponent, InvoiceCountSummaryComponent, InvoiceAmountSummaryComponent, SalesInvoiceDueComponent, PurchaseInvoiceDueComponent]
})
export class DashboardModule { }
