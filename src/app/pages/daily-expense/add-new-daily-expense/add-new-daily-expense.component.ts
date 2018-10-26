import { Component, OnInit } from '@angular/core';
import { CoreConstant } from "@app/config/core.constant";
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-add-new-daily-expense',
  templateUrl: './add-new-daily-expense.component.html',
  styleUrls: ['./add-new-daily-expense.component.scss']
})
export class AddNewDailyExpenseComponent implements OnInit {
  paymentType = CoreConstant.paymentType;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToDailyExpenseBae() {
    this._router.navigate([ROUTES.dailyExpense.absoluteRoute]);
  }

}
