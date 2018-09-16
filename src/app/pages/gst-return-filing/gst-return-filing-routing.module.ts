import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gstr1Component } from '@app/pages/gst-return-filing/gstr-1/gstr-1.component';

const routes: Routes = [
  { path: '', component: Gstr1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GstReturnFilingRoutingModule { }
