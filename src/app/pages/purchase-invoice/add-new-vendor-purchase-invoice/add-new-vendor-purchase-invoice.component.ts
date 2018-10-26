import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-vendor-purchase-invoice',
  templateUrl: './add-new-vendor-purchase-invoice.component.html',
  styleUrls: ['./add-new-vendor-purchase-invoice.component.scss']
})
export class AddNewVendorPurchaseInvoiceComponent implements OnInit {
  states = CoreConstant.states;
  countries = CoreConstant.countries;
  customers = CoreConstant.customers;

  constructor() { }

  ngOnInit() {
  }

}
