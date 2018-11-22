import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-pro-sale-invoice',
  templateUrl: './add-new-pro-sale-invoice.component.html',
  styleUrls: ['./add-new-pro-sale-invoice.component.scss']
})
export class AddNewProSaleInvoiceComponent implements OnInit {
  addProForm: FormGroup;
  measurementUnits = CoreConstant.measurementUnits;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitAddProForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.addProForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'sellPrice': new FormControl(''),
      'purchasePrice': new FormControl(''),
      'hsnCode': new FormControl(''),
      'unitOfMeasure': new FormControl(''),
      'cgst': new FormControl(''),
      'sgst': new FormControl(''),
      'igst': new FormControl(''),
      'cess': new FormControl(''),
      'cessAmt': new FormControl('')
    })
  }

}
