import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsBaseComponent } from '@app/pages/products/products-base/products-base.component';
import { ProductsStockComponent } from '@app/pages/products/products-stock/products-stock.component';
import { AddNewProComponent } from '@app/pages/products/add-new-pro/add-new-pro.component';

const routes: Routes = [
  { path: '', component: ProductsBaseComponent},
  { path: 'stock', component: ProductsStockComponent},
  {
    path: 'add-new-product',
    component: AddNewProComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
