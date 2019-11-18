import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { CoreModule } from '../core/core.module';
import { RootRoutingModule } from './root-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '@app/shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonUtilService } from '@app/core/services/common-util.service';
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

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    SettingsModule,
    CustomersModule,
    TransportModule,
    ProductsModule,
    SaleInvoiceModule,
    PurchaseInvoiceModule,
    DailyExpenseModule,
    OtherDocumentsModule,
    ExportsModule,
    GstReturnFilingModule,
    PaymentReceiptModule,
    CoreModule,
    SharedModule,
    RootRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [CommonUtilService],
  bootstrap: [RootComponent]
})
export class RootModule { }
