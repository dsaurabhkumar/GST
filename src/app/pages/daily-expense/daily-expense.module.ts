import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyExpenseRoutingModule } from './daily-expense-routing.module';
import { DailyExpenseBaseComponent } from './daily-expense-base/daily-expense-base.component';
import { SearchDailyExpenseComponent } from './search-daily-expense/search-daily-expense.component';
import { DailyExpenseSummaryComponent } from './daily-expense-summary/daily-expense-summary.component';
import { DailyExpenseListComponent } from './daily-expense-list/daily-expense-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { AddNewDailyExpenseComponent } from './add-new-daily-expense/add-new-daily-expense.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DailyExpenseRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DailyExpenseBaseComponent, SearchDailyExpenseComponent, DailyExpenseSummaryComponent, DailyExpenseListComponent, AddNewDailyExpenseComponent]
})
export class DailyExpenseModule { }
