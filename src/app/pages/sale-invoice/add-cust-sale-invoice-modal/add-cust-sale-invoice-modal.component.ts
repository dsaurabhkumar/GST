import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-cust-sale-invoice-modal',
  templateUrl: './add-cust-sale-invoice-modal.component.html',
  styleUrls: ['./add-cust-sale-invoice-modal.component.scss']
})
export class AddCustSaleInvoiceModalComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor() { }

  ngOnInit() {
  }

}
