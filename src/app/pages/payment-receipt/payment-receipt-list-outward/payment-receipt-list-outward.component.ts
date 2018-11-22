import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-payment-receipt-list-outward',
  templateUrl: './payment-receipt-list-outward.component.html',
  styleUrls: ['./payment-receipt-list-outward.component.scss']
})
export class PaymentReceiptListOutwardComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewPaymentReceiptOut() {
    this._router.navigate([ROUTES.paymentReceipt.children.addOutwardPaymentReceipt.absoluteRoute]);
  }

}
