import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from '@app/pages/report/sales/sales.component';
import { PurchaseComponent } from '@app/pages/report/purchase/purchase.component';
import { ReportOutwardPaymentComponent } from '@app/pages/report/report-outward-payment/report-outward-payment.component';
import { ReportInwardPaymentComponent } from '@app/pages/report/report-inward-payment/report-inward-payment.component';
import { CompanyLedgerComponent } from '@app/pages/report/company-ledger/company-ledger.component';
import { ReportDailyExpenseComponent } from '@app/pages/report/report-daily-expense/report-daily-expense.component';
import { SalesProductReportComponent } from '@app/pages/report/sales-product-report/sales-product-report.component';
import { PurchaseProductReportComponent } from '@app/pages/report/purchase-product-report/purchase-product-report.component';
import { SalesOutstandingComponent } from './sales-outstanding/sales-outstanding.component';
import { PurchaseOutstandingComponent } from './purchase-outstanding/purchase-outstanding.component';

const routes: Routes = [
  { path: '', component: SalesComponent},
  { path: 'purchase', component: PurchaseComponent},
  { path: 'inward-payment', component: ReportInwardPaymentComponent},
  { path: 'outward-payment', component: ReportOutwardPaymentComponent},
  { path: 'company-ledger', component: CompanyLedgerComponent},
  { path: 'daily-expense', component: ReportDailyExpenseComponent},
  { path: 'sales-product-report', component: SalesProductReportComponent},
  { path: 'purchase-product-report', component: PurchaseProductReportComponent},
  { path: 'sales-outstanding-report', component: SalesOutstandingComponent },
  { path: 'purchase-outstanding-report', component: PurchaseOutstandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
