import { Component, OnInit } from '@angular/core';
import { CoreConstant } from "@app/config/core.constant";
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-add-new-daily-expense',
  templateUrl: './add-new-daily-expense.component.html',
  styleUrls: ['./add-new-daily-expense.component.scss']
})
export class AddNewDailyExpenseComponent implements OnInit {
  addDailyExpenseForm: FormGroup;
  paymentType = CoreConstant.paymentType;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  backToDailyExpenseBae() {
    this._router.navigate([ROUTES.dailyExpense.absoluteRoute]);
  }

  onSubmitDailyExpense(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.addDailyExpenseForm = new FormGroup({
      'expenseTitle': new FormControl('', Validators.required),
      'expenseAmount': new FormControl('', Validators.required)
    })
  }

}
