import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-pro-sale-invoice',
  templateUrl: './add-new-pro-sale-invoice.component.html',
  styleUrls: ['./add-new-pro-sale-invoice.component.scss']
})
export class AddNewProSaleInvoiceComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
