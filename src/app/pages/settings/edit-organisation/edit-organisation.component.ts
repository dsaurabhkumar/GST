import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-edit-organisation',
  templateUrl: './edit-organisation.component.html',
  styleUrls: ['./edit-organisation.component.scss']
})
export class EditOrganisationComponent implements OnInit {
  states = CoreConstant.states;
  companyType = CoreConstant.companyType;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  backToSettings(){
    this._router.navigate([ROUTES.settings.absoluteRoute])
  }

}
