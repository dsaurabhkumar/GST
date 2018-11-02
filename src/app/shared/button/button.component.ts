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
  @Input() modalId: string;

  @ViewChild('btnView') btnView: ElementRef;;

  constructor() { }

  ngOnInit() {  }

  ngAfterViewInit() {
    if(this.modalId){
      this.btnView.nativeElement.setAttribute("data-target","#"+this.modalId);
      this.btnView.nativeElement.setAttribute("data-toggle", "modal");
    }

  }

}
