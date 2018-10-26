import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-report-inward-payment',
  templateUrl: './report-inward-payment.component.html',
  styleUrls: ['./report-inward-payment.component.scss']
})
export class ReportInwardPaymentComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
