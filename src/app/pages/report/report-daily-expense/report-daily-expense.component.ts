import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-report-daily-expense',
  templateUrl: './report-daily-expense.component.html',
  styleUrls: ['./report-daily-expense.component.scss']
})
export class ReportDailyExpenseComponent implements OnInit {
  reportType = CoreConstant.reportType;

  constructor() { }

  ngOnInit() {
  }

}
