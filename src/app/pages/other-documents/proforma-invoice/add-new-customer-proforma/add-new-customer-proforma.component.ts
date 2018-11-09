import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-customer-proforma',
  templateUrl: './add-new-customer-proforma.component.html',
  styleUrls: ['./add-new-customer-proforma.component.css']
})
export class AddNewCustomerProformaComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor() { }

  ngOnInit() {
  }

}
