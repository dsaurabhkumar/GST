import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-product-credit',
  templateUrl: './add-new-product-credit.component.html',
  styleUrls: ['./add-new-product-credit.component.css']
})
export class AddNewProductCreditComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
