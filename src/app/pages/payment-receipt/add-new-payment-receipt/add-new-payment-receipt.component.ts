import { Component, OnInit } from '@angular/core';
import { CoreConstant } from "@app/config/core.constant";
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-payment-receipt',
  templateUrl: './add-new-payment-receipt.component.html',
  styleUrls: ['./add-new-payment-receipt.component.scss']
})
export class AddNewPaymentReceiptComponent implements OnInit {
  addInwardReceiptForm: FormGroup
  paymentType = CoreConstant.paymentType;
  showChooseInvNo : boolean = false;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  chooseInvNo(event) {
    if(event.target.value == "onInvoice") {
      this.showChooseInvNo = true;
    } else {
      this.showChooseInvNo = false;
    }
  }

  backToInwardPayment() {
      this._router.navigate([ROUTES.paymentReceipt.absoluteRoute]);
  }

  OnSubmitInwardReceiptForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.addInwardReceiptForm = new FormGroup({
      'companyName': new FormControl('', Validators.required),
      'paymentDate': new FormControl('', Validators.required),
      'amount': new FormControl('', [Validators.required, Validators.pattern(CoreConstant.pattern.float)])
    })
  }
}
