import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-inward-payment',
  templateUrl: './inward-payment.component.html',
  styleUrls: ['./inward-payment.component.scss']
})
export class InwardPaymentComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewPaymentReceipt() {
    this._router.navigate([ROUTES.paymentReceipt.children.addPaymentReceipt.absoluteRoute]);
  }

}
