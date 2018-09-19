import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gst-widget-header',
  templateUrl: './gst-widget-header.component.html',
  styleUrls: ['./gst-widget-header.component.scss']
})
export class GstWidgetContainerComponent implements OnInit {

  @Input() headingContent:string= "Default Heading";
  @Input() iconName: string;

  constructor() { }

  ngOnInit() {
  }

}
