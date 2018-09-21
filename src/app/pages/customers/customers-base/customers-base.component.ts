import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-customers-base',
  templateUrl: './customers-base.component.html',
  styleUrls: ['./customers-base.component.scss']
})
export class CustomersBaseComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  addNewCustomer(){
    this._router.navigate([ROUTES.customers.children.customerComp.addNewDetails.absoluteRoute]);
  }

}
