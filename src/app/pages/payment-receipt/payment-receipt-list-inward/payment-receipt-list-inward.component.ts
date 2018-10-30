import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-payment-receipt-list-inward',
  templateUrl: './payment-receipt-list-inward.component.html',
  styleUrls: ['./payment-receipt-list-inward.component.scss']
})
export class PaymentReceiptListInwardComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewPaymentReceipt() {
      this._router.navigate([ROUTES.paymentReceipt.children.addPaymentReceipt.absoluteRoute]);
  }
}
