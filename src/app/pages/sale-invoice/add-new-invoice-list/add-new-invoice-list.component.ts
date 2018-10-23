import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-add-new-invoice-list',
  templateUrl: './add-new-invoice-list.component.html',
  styleUrls: ['./add-new-invoice-list.component.scss']
})
export class AddNewInvoiceListComponent implements OnInit {
  states = CoreConstant.states;

  constructor() { }

  ngOnInit() {
  }

}
