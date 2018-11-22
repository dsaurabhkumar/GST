import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-invoice-list',
  templateUrl: './add-new-invoice-list.component.html',
  styleUrls: ['./add-new-invoice-list.component.scss']
})
export class AddNewInvoiceListComponent implements OnInit {
  states = CoreConstant.states;
  addInvoiceForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitInvoiceForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addInvoiceForm = new FormGroup({
      'inputMS': new FormControl('',Validators.required)
    })
  }

}
