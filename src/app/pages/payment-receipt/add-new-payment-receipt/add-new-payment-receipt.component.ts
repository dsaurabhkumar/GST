import { Component, OnInit } from '@angular/core';
import { CoreConstant } from "@app/config/core.constant";
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-add-new-payment-receipt',
  templateUrl: './add-new-payment-receipt.component.html',
  styleUrls: ['./add-new-payment-receipt.component.scss']
})
export class AddNewPaymentReceiptComponent implements OnInit {
  paymentType = CoreConstant.paymentType;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToInwardPayment() {
      this._router.navigate([ROUTES.paymentReceipt.absoluteRoute]);
  }

}
