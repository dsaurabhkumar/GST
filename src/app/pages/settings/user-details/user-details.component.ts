import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@app/config/route.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  ROUTES = ROUTES;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  editUser() {
    this._router.navigate([this.ROUTES.settings.children.user.editUser.absoluteRoute])

  }

}
