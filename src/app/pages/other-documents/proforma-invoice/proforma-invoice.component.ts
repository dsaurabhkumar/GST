import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@app/config/route.constant';

@Component({
  selector: 'app-proforma-invoice',
  templateUrl: './proforma-invoice.component.html',
  styleUrls: ['./proforma-invoice.component.scss']
})
export class ProformaInvoiceComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addNewProformaBase() {
    this._router.navigate([ROUTES.otherDocs.children.addNewproformaInvoice.absoluteRoute]);
  }

}
