import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-search-daily-expense',
  templateUrl: './search-daily-expense.component.html',
  styleUrls: ['./search-daily-expense.component.scss']
})
export class SearchDailyExpenseComponent implements OnInit {
  categories = CoreConstant.categories;

  constructor() { }

  ngOnInit() {
  }

}
