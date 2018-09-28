import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-widget-header-with-btn',
  templateUrl: './widget-header-with-btn.component.html',
  styleUrls: ['./widget-header-with-btn.component.scss']
})
export class WidgetHeaderWithBtnComponent implements OnInit {

  @Input() iconName: string;
  @Input() contentHeading: string;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

}
