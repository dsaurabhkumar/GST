import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }
}
