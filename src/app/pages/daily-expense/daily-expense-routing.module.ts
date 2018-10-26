import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyExpenseBaseComponent } from '@app/pages/daily-expense/daily-expense-base/daily-expense-base.component';
import { AddNewDailyExpenseComponent } from './add-new-daily-expense/add-new-daily-expense.component';

const routes: Routes = [
  { path: '', component: DailyExpenseBaseComponent},
  { path:'add-new-daily-expense', component: AddNewDailyExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyExpenseRoutingModule { }
