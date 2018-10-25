import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-purchase-invoice-list',
  templateUrl: './purchase-invoice-list.component.html',
  styleUrls: ['./purchase-invoice-list.component.scss']
})
export class PurchaseInvoiceListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewPurchaseInvoice() {
      this._router.navigate([ROUTES.purchaseInvoice.children.addNewPurchaseInv.absoluteRoute]);
  }

}
