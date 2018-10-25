import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
@Component({
  selector: 'app-purchase-invoice-base',
  templateUrl: './purchase-invoice-base.component.html',
  styleUrls: ['./purchase-invoice-base.component.scss']
})
export class PurchaseInvoiceBaseComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewPurchaseInvoice() {
    this._router.navigate([ROUTES.purchaseInvoice.children.addNewPurchaseInv.absoluteRoute]);
  }

}
