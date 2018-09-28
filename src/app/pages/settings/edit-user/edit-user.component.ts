import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@app/config/route.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToSettings(){
    this._router.navigate([ROUTES.settings.absoluteRoute])
  }

}
