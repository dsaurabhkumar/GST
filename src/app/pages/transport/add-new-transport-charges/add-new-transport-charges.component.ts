import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-transport-charges',
  templateUrl: './add-new-transport-charges.component.html',
  styleUrls: ['./add-new-transport-charges.component.scss']
})
export class AddNewTransportChargesComponent implements OnInit {
  addTransportChargesForm: FormGroup;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  backToTransportCharge(){
    this._router.navigate([ROUTES.transport.children.transportCharges.absoluteRoute]);
  }
  onSubmitAddTransportChargesForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addTransportChargesForm = new FormGroup({
      'name': new FormControl('', [Validators.required])
    })
  }
}
