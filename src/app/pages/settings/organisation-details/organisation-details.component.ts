import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  ROUTES = ROUTES;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  editOrgDetails(){
    this._router.navigate([ROUTES.settings.children.organisation.editOrganisation.absoluteRoute]);
  }

}
