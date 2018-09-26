import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-transport-base',
  templateUrl: './transport-base.component.html',
  styleUrls: ['./transport-base.component.scss']
})
export class TransportBaseComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addTransportDetails(){
    this._router.navigate([ROUTES.transport.children.addNewTransport.absoluteRoute]);
  }

}
