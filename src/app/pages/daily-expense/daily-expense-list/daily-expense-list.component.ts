import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-daily-expense-list',
  templateUrl: './daily-expense-list.component.html',
  styleUrls: ['./daily-expense-list.component.scss']
})
export class DailyExpenseListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewDailyExpense() {
      this._router.navigate([ROUTES.dailyExpense.children.addNewDailyExp.absoluteRoute]);
  }

}
