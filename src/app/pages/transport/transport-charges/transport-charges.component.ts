import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-transport-charges',
  templateUrl: './transport-charges.component.html',
  styleUrls: ['./transport-charges.component.scss']
})
export class TransportChargesComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addTransportCharges(){
    this._router.navigate([ROUTES.transport.children.addNewTransportCharges.absoluteRoute]);
  }

}
