import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-outward-payment',
  templateUrl: './outward-payment.component.html',
  styleUrls: ['./outward-payment.component.scss']
})
export class OutwardPaymentComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  
  addNewPaymentReceiptOut() {
    this._router.navigate([ROUTES.paymentReceipt.children.addOutwardPaymentReceipt.absoluteRoute]);
  }

}
