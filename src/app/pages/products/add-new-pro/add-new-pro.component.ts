import { Component, OnInit } from "@angular/core";
import { CoreConstant } from "@app/config/core.constant";
import { Router } from "@angular/router";
import { ROUTES } from "@app/config/route.constant";
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: "app-add-new-pro",
  templateUrl: "./add-new-pro.component.html",
  styleUrls: ["./add-new-pro.component.scss"]
})
export class AddNewProComponent implements OnInit {
  addProductForm: FormGroup;
  measurementUnits = CoreConstant.measurementUnits;

  constructor(
    private _router: Router,
    private _commonUtil: CommonUtilService
    ) {}

  ngOnInit() {
    this.createForm();
  }

  backToProductBase() {
    this._router.navigate([ROUTES.products.absoluteRoute]
      );
  }
  onSubmitAddProductForm(form){
    this._commonUtil.validateForm(form);
    if(form.invalid)
    return;
  }

  createForm(){
    this.addProductForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.pattern(CoreConstant.pattern.letter)]),
      'unitOfMeasure': new FormControl('', Validators.required)
    })
  }
}
