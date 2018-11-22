import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-cust-sale-invoice-modal',
  templateUrl: './add-cust-sale-invoice-modal.component.html',
  styleUrls: ['./add-cust-sale-invoice-modal.component.scss']
})
export class AddCustSaleInvoiceModalComponent implements OnInit {
  addCustomerVendorForm: FormGroup;
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitAddCustomerVendorForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addCustomerVendorForm = new FormGroup({
      'customerName': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
    })
  }

}
