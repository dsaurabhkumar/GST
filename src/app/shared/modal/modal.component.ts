import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('modalId') modalId : string;
  @Input('heading') heading : string;
  @Input('footerContent') footerContent : string;
  @Input('size') size:string = 'lg';

  constructor() { }

  ngOnInit() {
  }

}
