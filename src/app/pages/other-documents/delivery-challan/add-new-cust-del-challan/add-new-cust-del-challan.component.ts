import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-cust-del-challan',
  templateUrl: './add-new-cust-del-challan.component.html',
  styleUrls: ['./add-new-cust-del-challan.component.css']
})
export class AddNewCustDelChallanComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor() { }

  ngOnInit() {
  }

}
