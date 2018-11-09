import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-product-quotation',
  templateUrl: './add-new-product-quotation.component.html',
  styleUrls: ['./add-new-product-quotation.component.css']
})
export class AddNewProductQuotationComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
