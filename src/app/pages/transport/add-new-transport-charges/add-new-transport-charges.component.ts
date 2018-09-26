import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-add-new-transport-charges',
  templateUrl: './add-new-transport-charges.component.html',
  styleUrls: ['./add-new-transport-charges.component.scss']
})
export class AddNewTransportChargesComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToTransportCharge(){
    this._router.navigate([ROUTES.transport.children.transportCharges.absoluteRoute]);
  }
}
