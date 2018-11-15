import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { CoreConstant } from '@app/config/core.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  addCustomerVendorForm: FormGroup;

  countries = CoreConstant.countries;
  states = CoreConstant.states;
  customers = CoreConstant.customers;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  backToCustomer(){
    this._router.navigate([ROUTES.customers.absoluteRoute]);
  }
  onSubmitedaddCustomerVendorForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.addCustomerVendorForm = new FormGroup({
      'customerVendorName': new FormControl('', [Validators.required, Validators.pattern(CoreConstant.pattern.letter)]),
      'state': new FormControl('', Validators.required)
    })
  }

}
