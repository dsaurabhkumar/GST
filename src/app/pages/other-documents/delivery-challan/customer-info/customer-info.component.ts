import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }
}
