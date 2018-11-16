import { Component, OnInit } from '@angular/core';
import { CoreConstant } from '@app/config/core.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-trans-sale-invoice',
  templateUrl: './add-new-trans-sale-invoice.component.html',
  styleUrls: ['./add-new-trans-sale-invoice.component.scss']
})
export class AddNewTransSaleInvoiceComponent implements OnInit {
  addTransForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitAddTransForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addTransForm = new FormGroup({
      'transName': new FormControl('', [Validators.required, Validators.pattern(CoreConstant.pattern.letter)]),
    })
  }

}
