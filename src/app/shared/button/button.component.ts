import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string;
  @Input() btnIcon: string;
  @Input() btnClass: string="btn-default";

  constructor() { }

  ngOnInit() {
  }

}
