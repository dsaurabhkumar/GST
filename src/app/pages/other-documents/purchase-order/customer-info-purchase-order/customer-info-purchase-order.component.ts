import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-customer-info-purchase-order',
  templateUrl: './customer-info-purchase-order.component.html',
  styleUrls: ['./customer-info-purchase-order.component.css']
})
export class CustomerInfoPurchaseOrderComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }

}
