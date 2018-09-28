import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-products-base',
  templateUrl: './products-base.component.html',
  styleUrls: ['./products-base.component.scss']
})
export class ProductsBaseComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addnewProduct() {
    this._router.navigate([ROUTES.products.children.addnewPro.absoluteRoute]);
  }

}
