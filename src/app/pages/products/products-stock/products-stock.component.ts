import { Component, OnInit } from '@angular/core';
import { CoreConstant } from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-products-stock',
  templateUrl: './products-stock.component.html',
  styleUrls: ['./products-stock.component.scss']
})
export class ProductsStockComponent implements OnInit {
  
  stocksList = CoreConstant.stocksList;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToProducts() {
this._router.navigate([ROUTES.products.absoluteRoute]);
  }

}
