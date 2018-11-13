import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-customer-information-proforma',
  templateUrl: './customer-information-proforma.component.html',
  styleUrls: ['./customer-information-proforma.component.css']
})
export class CustomerInformationProformaComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }

}
