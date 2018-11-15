import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
import { ROUTES } from '@app/config/route.constant';
import { Router } from '@angular/router';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  backToSettings(){
    this._router.navigate([ROUTES.settings.absoluteRoute])
  }
  onSubmiteditUserForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.editUserForm = new FormGroup({
      'inputFullName': new FormControl('', [Validators.required, Validators.pattern(CoreConstant.pattern.letter)]),
      'inputPhone': new FormControl('',[Validators.required, Validators.pattern(CoreConstant.pattern.number)] ),
      'inputPassword': new FormControl('', [Validators.required, Validators.pattern(CoreConstant.pattern.password)]),
      'inputRepPass': new FormControl('',Validators.required)
    })
  }

}
