import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: ROUTES.dashboard.route, pathMatch: 'full'
  }, 
  {
    path: ROUTES.dashboard.route,
    loadChildren: ROUTES.dashboard.module
  },
  {
    path: ROUTES.settings.route,
    loadChildren: ROUTES.settings.module
  },
  {
    path: ROUTES.customers.route,
    loadChildren: ROUTES.customers.module
  },
  {
    path: ROUTES.transport.route,
    loadChildren: ROUTES.transport.module
  },
  {
    path: ROUTES.products.route,
    loadChildren: ROUTES.products.module
  },
  {
    path: ROUTES.saleInvoice.route,
    loadChildren: ROUTES.saleInvoice.module
  },
  {
    path: ROUTES.purchaseInvoice.route,
    loadChildren: ROUTES.purchaseInvoice.module
  },
  {
    path: ROUTES.dailyExpense.route,
    loadChildren: ROUTES.dailyExpense.module
  },
  {
    path: ROUTES.otherDocs.route,
    loadChildren: ROUTES.otherDocs.module
  },
  {
    path: ROUTES.exports.route,
    loadChildren: ROUTES.exports.module
  },
  {
    path: ROUTES.gstReturn.route,
    loadChildren: ROUTES.gstReturn.module
  },
  {
    path: ROUTES.paymentReceipt.route,
    loadChildren: ROUTES.paymentReceipt.module
  },
  {
    path: ROUTES.report.route,
    loadChildren: ROUTES.report.module
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
