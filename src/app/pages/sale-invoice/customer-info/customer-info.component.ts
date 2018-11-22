import { Component, OnInit, Input } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = true;
  @Input() addInvoiceForm : FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }

}
