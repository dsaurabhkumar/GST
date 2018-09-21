import { Component, OnInit } from '@angular/core';
import { CoreConstant} from '@app/config/core.constant'

@Component({
  selector: 'app-edit-organisation',
  templateUrl: './edit-organisation.component.html',
  styleUrls: ['./edit-organisation.component.scss']
})
export class EditOrganisationComponent implements OnInit {
  states = CoreConstant.states;

  constructor() { }

  ngOnInit() {
  }

}
