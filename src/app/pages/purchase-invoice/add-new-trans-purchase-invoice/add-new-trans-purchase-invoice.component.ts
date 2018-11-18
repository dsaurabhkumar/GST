import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-trans-purchase-invoice',
  templateUrl: './add-new-trans-purchase-invoice.component.html',
  styleUrls: ['./add-new-trans-purchase-invoice.component.scss']
})
export class AddNewTransPurchaseInvoiceComponent implements OnInit {
  addnewTransportForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitTransportForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addnewTransportForm = new FormGroup({
      'transportName': new FormControl('', Validators.required),
    })
  }

}
