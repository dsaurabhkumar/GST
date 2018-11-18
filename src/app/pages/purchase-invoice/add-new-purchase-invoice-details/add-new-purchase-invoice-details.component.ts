import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-purchase-invoice-details',
  templateUrl: './add-new-purchase-invoice-details.component.html',
  styleUrls: ['./add-new-purchase-invoice-details.component.scss']
})
export class AddNewPurchaseInvoiceDetailsComponent implements OnInit {
  addPurchaseInvForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitPurchaseInvForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addPurchaseInvForm = new FormGroup({
      'inputMS': new FormControl('',Validators.required),
      'invoiceNo': new FormControl('', Validators.required),
    })
  }

}
