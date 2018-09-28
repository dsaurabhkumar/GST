import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-edit-transport-list',
  templateUrl: './edit-transport-list.component.html',
  styleUrls: ['./edit-transport-list.component.scss']
})
export class EditTransportListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToTransportBase() {
    this._router.navigate([ROUTES.transport.absoluteRoute]);
  }

}
