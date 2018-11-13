import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-customer-info-credit-note',
  templateUrl: './customer-info-credit-note.component.html',
  styleUrls: ['./customer-info-credit-note.component.css']
})
export class CustomerInfoCreditNoteComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }

}
