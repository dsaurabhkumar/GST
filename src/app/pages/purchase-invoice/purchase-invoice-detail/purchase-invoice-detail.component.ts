import { Component, OnInit, Input } from '@angular/core';
import { Validators,FormGroup, FormControl } from '@angular/forms';
import { CommonUtilService } from '@app/core/services/common-util.service';

@Component({
  selector: 'app-purchase-invoice-detail',
  templateUrl: './purchase-invoice-detail.component.html',
  styleUrls: ['./purchase-invoice-detail.component.scss']
})
export class PurchaseInvoiceDetailComponent implements OnInit {
  @Input() addPurchaseInvForm : FormGroup;

  constructor(
    private _commonUtil: CommonUtilService
  ) { }

  ngOnInit() {
  }

}
