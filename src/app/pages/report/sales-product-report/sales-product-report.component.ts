import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-sales-product-report',
  templateUrl: './sales-product-report.component.html',
  styleUrls: ['./sales-product-report.component.scss']
})
export class SalesProductReportComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
