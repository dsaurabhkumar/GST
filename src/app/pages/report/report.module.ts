import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReportInwardPaymentComponent } from './report-inward-payment/report-inward-payment.component';
import { ReportOutwardPaymentComponent } from './report-outward-payment/report-outward-payment.component';
import { CompanyLedgerComponent } from './company-ledger/company-ledger.component';
import { ReportDailyExpenseComponent } from './report-daily-expense/report-daily-expense.component';
import { SalesProductReportComponent } from './sales-product-report/sales-product-report.component';
import { PurchaseProductReportComponent } from './purchase-product-report/purchase-product-report.component';
import { SalesOutstandingComponent } from './sales-outstanding/sales-outstanding.component';
import { PurchaseOutstandingComponent } from './purchase-outstanding/purchase-outstanding.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule
  ],
  declarations: [SalesComponent, PurchaseComponent, ReportInwardPaymentComponent, ReportOutwardPaymentComponent, CompanyLedgerComponent, ReportDailyExpenseComponent, SalesProductReportComponent, PurchaseProductReportComponent, SalesOutstandingComponent, PurchaseOutstandingComponent]
})
export class ReportModule { }
