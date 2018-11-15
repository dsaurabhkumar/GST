import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-edit-transport-list',
  templateUrl: './edit-transport-list.component.html',
  styleUrls: ['./edit-transport-list.component.scss']
})
export class EditTransportListComponent implements OnInit {
  addTransportForm: FormGroup;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  backToTransportBase() {
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
