import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-prod-purchase-invoice',
  templateUrl: './add-new-prod-purchase-invoice.component.html',
  styleUrls: ['./add-new-prod-purchase-invoice.component.scss']
})
export class AddNewProdPurchaseInvoiceComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
