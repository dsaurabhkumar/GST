import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';
import { Validators,FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-organisation',
  templateUrl: './edit-organisation.component.html',
  styleUrls: ['./edit-organisation.component.scss']
})
export class EditOrganisationComponent implements OnInit {
  states = CoreConstant.states;
  companyType = CoreConstant.companyType;
  editForm: FormGroup;

  constructor(
    private _router: Router
  ) { }



  ngOnInit() {
    this.editForm = new FormGroup({
      'companyName' : new FormControl('',Validators.required),
      'companyType' : new FormControl('',Validators.required),
      'panNumber' : new FormControl(''),
      'gstNmber' : new FormControl(''),
      'addressLine1' : new FormControl('',Validators.required),
      'addressLine2' : new FormControl(),
      'pinCode' : new FormControl('',Validators.required),
      'state' : new FormControl('',Validators.required),
      'city' : new FormControl('',Validators.required)
    })
  }

  backToSettings(){
    this._router.navigate([ROUTES.settings.absoluteRoute])
  }
  onSubmitEditForm(form){
    console.log(form)
    debugger
  }

}
