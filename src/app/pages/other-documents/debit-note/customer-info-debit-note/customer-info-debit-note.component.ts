import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-customer-info-debit-note',
  templateUrl: './customer-info-debit-note.component.html',
  styleUrls: ['./customer-info-debit-note.component.css']
})
export class CustomerInfoDebitNoteComponent implements OnInit {
  states = CoreConstant.states;
  isSameAsShippingAddress: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  shipAddCheck(event){
    this.isSameAsShippingAddress = !this.isSameAsShippingAddress;
  }

}
