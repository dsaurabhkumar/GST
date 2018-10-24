import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  paymentType = CoreConstant.paymentType;

  constructor() { }

  ngOnInit() {
  }

}
