import { Component, OnInit, Input } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-vendor-information',
  templateUrl: './vendor-information.component.html',
  styleUrls: ['./vendor-information.component.scss']
})
export class VendorInformationComponent implements OnInit {
  @Input() addPurchaseInvForm : FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
  }

}
