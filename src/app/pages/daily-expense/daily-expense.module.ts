import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyExpenseRoutingModule } from './daily-expense-routing.module';
import { DailyExpenseBaseComponent } from './daily-expense-base/daily-expense-base.component';

@NgModule({
  imports: [
    CommonModule,
    DailyExpenseRoutingModule
  ],
  declarations: [DailyExpenseBaseComponent]
})
export class DailyExpenseModule { }
