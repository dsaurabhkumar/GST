import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-customer-purchase-order',
  templateUrl: './add-new-customer-purchase-order.component.html',
  styleUrls: ['./add-new-customer-purchase-order.component.css']
})
export class AddNewCustomerPurchaseOrderComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor() { }

  ngOnInit() {
  }

}
