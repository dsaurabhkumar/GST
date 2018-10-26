import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-purchase-outstanding',
  templateUrl: './purchase-outstanding.component.html',
  styleUrls: ['./purchase-outstanding.component.scss']
})
export class PurchaseOutstandingComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
