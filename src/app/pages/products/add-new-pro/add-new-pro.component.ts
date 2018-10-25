import { Component, OnInit } from "@angular/core";
import { CoreConstant } from "@app/config/core.constant";
import { Router } from "@angular/router";
import { ROUTES } from "@app/config/route.constant";

@Component({
  selector: "app-add-new-pro",
  templateUrl: "./add-new-pro.component.html",
  styleUrls: ["./add-new-pro.component.scss"]
})
export class AddNewProComponent implements OnInit {
  measurementUnits = CoreConstant.measurementUnits;

  constructor(private _router: Router) {}

  ngOnInit() {}

  backToProductBase() {
    this._router.navigate([ROUTES.products.absoluteRoute]
      );
  }
}
