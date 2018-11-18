import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-pack-charges-purchase-invoice',
  templateUrl: './add-new-pack-charges-purchase-invoice.component.html',
  styleUrls: ['./add-new-pack-charges-purchase-invoice.component.scss']
})
export class AddNewPackChargesPurchaseInvoiceComponent implements OnInit {
  addNewChargeForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitChargeForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addNewChargeForm = new FormGroup({
      'transChargeName': new FormControl('', Validators.required),
    })
  }

}
