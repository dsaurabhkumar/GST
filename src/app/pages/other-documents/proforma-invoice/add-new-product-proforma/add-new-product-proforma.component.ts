import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-product-proforma',
  templateUrl: './add-new-product-proforma.component.html',
  styleUrls: ['./add-new-product-proforma.component.css']
})
export class AddNewProductProformaComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
