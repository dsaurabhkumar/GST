import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../../../config/route.constant';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  ROUTES= ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
