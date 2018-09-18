import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gst-widget-container',
  templateUrl: './gst-widget-container.component.html',
  styleUrls: ['./gst-widget-container.component.scss']
})
export class GstWidgetContainerComponent implements OnInit {

  @Input() headingContent:string= "Default Heading";
  @Input() subHeadingContent;

  constructor() { }

  ngOnInit() {
  }

}
