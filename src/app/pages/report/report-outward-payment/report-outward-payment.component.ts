import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-report-outward-payment',
  templateUrl: './report-outward-payment.component.html',
  styleUrls: ['./report-outward-payment.component.scss']
})
export class ReportOutwardPaymentComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
