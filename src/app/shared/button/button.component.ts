import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string;
  @Input() btnIcon: string;
  @Input() btnClass: string="btn-default";
  @Input() showModal: boolean;

  @ViewChild('btnView') btnView: ElementRef;;

  constructor() { }

  ngOnInit() {  }

  ngAfterViewInit() {
    if(this.showModal){
      this.btnView.nativeElement.setAttribute("data-target","#openModal");
      this.btnView.nativeElement.setAttribute("data-toggle", "modal");
    }

  }

}
