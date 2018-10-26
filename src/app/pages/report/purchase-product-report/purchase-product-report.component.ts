import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-purchase-product-report',
  templateUrl: './purchase-product-report.component.html',
  styleUrls: ['./purchase-product-report.component.scss']
})
export class PurchaseProductReportComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
