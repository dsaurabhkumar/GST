import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { CoreConstant } from '@app/config/core.constant';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  countries = CoreConstant.countries;
  states = CoreConstant.states;
  customers = CoreConstant.customers;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToCustomer(){
    this._router.navigate([ROUTES.customers.absoluteRoute]);
  }

}
