import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'invoice-options',
  templateUrl: './invoice-options.component.html',
  styleUrls: ['./invoice-options.component.scss']
})
export class InvoiceOptionsComponent implements OnInit {

  ROUTES= ROUTES;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  editInvoice() {
    this._router.navigate([this.ROUTES.settings.children.invoice.editInvoice.absoluteRoute])
  }

}
