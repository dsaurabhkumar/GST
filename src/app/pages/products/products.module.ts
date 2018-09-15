import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsBaseComponent } from './products-base/products-base.component';
import { ProductsStockComponent } from './products-stock/products-stock.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsBaseComponent, ProductsStockComponent]
})
export class ProductsModule { }
