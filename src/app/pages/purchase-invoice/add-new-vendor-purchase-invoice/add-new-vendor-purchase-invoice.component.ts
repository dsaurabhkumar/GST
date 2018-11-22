import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-vendor-purchase-invoice',
  templateUrl: './add-new-vendor-purchase-invoice.component.html',
  styleUrls: ['./add-new-vendor-purchase-invoice.component.scss']
})
export class AddNewVendorPurchaseInvoiceComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;
  addnewVendorForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitVendorForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addnewVendorForm = new FormGroup({
      'VendorName': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required)
    })
  }

}
