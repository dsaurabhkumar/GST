import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-like-dislike-buttons',
  templateUrl: './like-dislike-buttons.component.html',
  styleUrls: ['./like-dislike-buttons.component.css']
})
export class LikeDislikeButtonsComponent implements OnInit {

  @Input() likeBtnText: string;
  @Input() unlikeBtnText: string;
  @Input() likeBtnIcon: string;
  @Input() unlikeBtnIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
