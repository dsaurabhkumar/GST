import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-company-ledger',
  templateUrl: './company-ledger.component.html',
  styleUrls: ['./company-ledger.component.scss']
})
export class CompanyLedgerComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
