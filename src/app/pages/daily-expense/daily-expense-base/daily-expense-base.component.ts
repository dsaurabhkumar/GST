import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-daily-expense-base',
  templateUrl: './daily-expense-base.component.html',
  styleUrls: ['./daily-expense-base.component.scss']
})
export class DailyExpenseBaseComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewDailyExpense() {
    this._router.navigate([ROUTES.dailyExpense.children.addNewDailyExp.absoluteRoute]);
  }

}
