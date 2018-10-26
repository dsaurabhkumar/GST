import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-sales-outstanding',
  templateUrl: './sales-outstanding.component.html',
  styleUrls: ['./sales-outstanding.component.scss']
})
export class SalesOutstandingComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
