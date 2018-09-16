import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyExpenseBaseComponent } from '@app/pages/daily-expense/daily-expense-base/daily-expense-base.component';

const routes: Routes = [
  { path: '', component: DailyExpenseBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyExpenseRoutingModule { }
