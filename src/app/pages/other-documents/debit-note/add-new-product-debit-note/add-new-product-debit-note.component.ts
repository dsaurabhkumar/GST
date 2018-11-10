import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant';

@Component({
  selector: 'app-add-new-product-debit-note',
  templateUrl: './add-new-product-debit-note.component.html',
  styleUrls: ['./add-new-product-debit-note.component.css']
})
export class AddNewProductDebitNoteComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor() { }

  ngOnInit() {
  }

}
