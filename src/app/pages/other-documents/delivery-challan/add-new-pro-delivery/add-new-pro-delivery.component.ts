import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-pro-delivery',
  templateUrl: './add-new-pro-delivery.component.html',
  styleUrls: ['./add-new-pro-delivery.component.css']
})
export class AddNewProDeliveryComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
