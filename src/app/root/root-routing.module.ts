import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from '@app/pages/dashboard/dashboard.module';
import { SettingsModule } from '@app/pages/settings/settings.module';
import { CustomersModule } from '@app/pages/customers/customers.module';
import { TransportModule } from '@app/pages/transport/transport.module';
import { ProductsModule } from '@app/pages/products/products.module';
import { SaleInvoiceModule } from '@app/pages/sale-invoice/sale-invoice.module';
import { PurchaseInvoiceModule } from '@app/pages/purchase-invoice/purchase-invoice.module';
import { DailyExpenseModule } from '@app/pages/daily-expense/daily-expense.module';
import { OtherDocumentsModule } from '@app/pages/other-documents/other-documents.module';
import { ExportsModule } from '@app/pages/exports/exports.module';
import { GstReturnFilingModule } from '@app/pages/gst-return-filing/gst-return-filing.module';
import { PaymentReceiptModule } from '@app/pages/payment-receipt/payment-receipt.module';
import { ReportModule } from '@app/pages/report/report.module';


const routes: Routes = [
  {
    path: '', redirectTo: ROUTES.dashboard.route, pathMatch: 'full'
  }, 
  {
    path: ROUTES.dashboard.route,
    loadChildren: () => DashboardModule
  },
  {
    path: ROUTES.settings.route,
    loadChildren: () => SettingsModule
  },
  {
    path: ROUTES.customers.route,
    loadChildren: () => CustomersModule
  },
  {
    path: ROUTES.transport.route,
    loadChildren: () => TransportModule
  },
  {
    path: ROUTES.products.route,
    loadChildren: () => ProductsModule
  },
  {
    path: ROUTES.saleInvoice.route,
    loadChildren: () => SaleInvoiceModule
  },
  {
    path: ROUTES.purchaseInvoice.route,
    loadChildren: () => PurchaseInvoiceModule
  },
  {
    path: ROUTES.dailyExpense.route,
    loadChildren: () => DailyExpenseModule
  },
  {
    path: ROUTES.otherDocs.route,
    loadChildren: () => OtherDocumentsModule
  },
  {
    path: ROUTES.exports.route,
    loadChildren: () => ExportsModule
  },
  {
    path: ROUTES.gstReturn.route,
    loadChildren: () => GstReturnFilingModule
  },
  {
    path: ROUTES.paymentReceipt.route,
    loadChildren: () => PaymentReceiptModule
  },
  {
    path: ROUTES.report.route,
    loadChildren: () => ReportModule
  },
  {
    path : '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RootRoutingModule { }
