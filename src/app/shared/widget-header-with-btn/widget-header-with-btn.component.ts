import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-widget-header-with-btn',
  templateUrl: './widget-header-with-btn.component.html',
  styleUrls: ['./widget-header-with-btn.component.scss']
})
export class WidgetHeaderWithBtnComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }
  
  addNewCustomer(){
    this._router.navigate([ROUTES.customers.children.customerComp.addNewDetails.absoluteRoute]);
  }
  importCust(){
    this._router.navigate([ROUTES.customers.children.customerComp.importCustomer.absoluteRoute]);
  }

}
