import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-customer-quotation',
  templateUrl: './add-new-customer-quotation.component.html',
  styleUrls: ['./add-new-customer-quotation.component.css']
})
export class AddNewCustomerQuotationComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor() { }

  ngOnInit() {
  }

}
