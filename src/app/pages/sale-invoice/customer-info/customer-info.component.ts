import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {
  states = CoreConstant.states;

  constructor() { }

  ngOnInit() {
  }

}
