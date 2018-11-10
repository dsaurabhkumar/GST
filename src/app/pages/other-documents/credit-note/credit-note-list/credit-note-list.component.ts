import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-credit-note-list',
  templateUrl: './credit-note-list.component.html',
  styleUrls: ['./credit-note-list.component.css']
})
export class CreditNoteListComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewCreditNoteBase() {
    this._router.navigate([ROUTES.otherDocs.children.addNewCreditNote.absoluteRoute]);
  }

}
