import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-sale-invoice-base',
  templateUrl: './sale-invoice-base.component.html',
  styleUrls: ['./sale-invoice-base.component.scss']
})
export class SaleInvoiceBaseComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewInvoice() {
    this._router.navigate([ROUTES.saleInvoice.children.addnewInvoiceDetails.absoluteRoute]);
  }

}
