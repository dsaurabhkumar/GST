import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@app/config/route.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'gst-nav',
  templateUrl: './gst-nav.component.html',
  styleUrls: ['./gst-nav.component.scss']
})
export class GstNavComponent implements OnInit {

  ROUTES = ROUTES;

  constructor( private _router: Router) { }

  ngOnInit() {
    // console.log(ROUTES.settings.absoluteRoute);
  }

  onClick(){
    this._router.navigate([ROUTES.gstReturn.absoluteRoute]);
    // this._router.navigate([{
    //   outlets: {
    //     primary: ROUTES.settings.children.organisation.editOrganisation.absoluteRoute,
    //     gstNav: ROUTES.settings.children.organisation.editOrganisation.absoluteRoute
    //   }
    // }]);
    
  }

}

