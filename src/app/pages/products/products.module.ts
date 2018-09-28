import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsBaseComponent } from './products-base/products-base.component';
import { ProductsStockComponent } from './products-stock/products-stock.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddNewProComponent } from './add-new-pro/add-new-pro.component';
import { SharedModule } from '@app/shared/shared.module';
import { ImportProductsComponent } from './import-products/import-products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [ProductsBaseComponent, ProductsStockComponent, SearchProductComponent, ProductListComponent, AddNewProComponent, ImportProductsComponent]
})
export class ProductsModule { }
