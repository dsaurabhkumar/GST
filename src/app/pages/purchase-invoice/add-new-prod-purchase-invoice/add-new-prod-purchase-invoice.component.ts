import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-prod-purchase-invoice',
  templateUrl: './add-new-prod-purchase-invoice.component.html',
  styleUrls: ['./add-new-prod-purchase-invoice.component.scss']
})
export class AddNewProdPurchaseInvoiceComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;
  addNewProductForm: FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }
  onSubmitProductForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }
  createForm(){
    this.addNewProductForm = new FormGroup({
      'purchasePrice': new FormControl('', Validators.required),
    })
  }

}
