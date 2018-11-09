import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-delivery-challan-list',
  templateUrl: './delivery-challan-list.component.html',
  styleUrls: ['./delivery-challan-list.component.css']
})
export class DeliveryChallanListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewDeliveryBase() {
    this._router.navigate([ROUTES.otherDocs.children.addNewDeliveryChallan.absoluteRoute]);
  }
}
