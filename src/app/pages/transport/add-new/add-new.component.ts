import { Component, OnInit } from '@angular/core';
import { CoreConstant } from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

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

  backToTransportBase(){
    this._router.navigate([ROUTES.transport.absoluteRoute]);
  }
}
