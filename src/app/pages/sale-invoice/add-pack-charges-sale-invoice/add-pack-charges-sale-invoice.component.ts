import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-pack-charges-sale-invoice',
  templateUrl: './add-pack-charges-sale-invoice.component.html',
  styleUrls: ['./add-pack-charges-sale-invoice.component.scss']
})
export class AddPackChargesSaleInvoiceComponent implements OnInit {
  addTransChargesForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitAddTransChargesForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addTransChargesForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'price': new FormControl(''),
      'hsnCode': new FormControl(''),
      'cgst': new FormControl(''),
      'sgst': new FormControl(''),
      'igst': new FormControl('')
    })
  }

}
