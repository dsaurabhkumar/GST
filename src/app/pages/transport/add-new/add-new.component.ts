import { Component, OnInit } from '@angular/core';
import { CoreConstant } from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  addTransportForm: FormGroup;

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

  backToTransportBase(){
    this._router.navigate([ROUTES.transport.absoluteRoute]);
  }
  onSubmitAddTransportForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.addTransportForm = new FormGroup({
      'transportName': new FormControl('', Validators.required)
    })
  }
}