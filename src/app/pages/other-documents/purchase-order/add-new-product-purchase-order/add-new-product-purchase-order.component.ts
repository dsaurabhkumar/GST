import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-product-purchase-order',
  templateUrl: './add-new-product-purchase-order.component.html',
  styleUrls: ['./add-new-product-purchase-order.component.css']
})
export class AddNewProductPurchaseOrderComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
