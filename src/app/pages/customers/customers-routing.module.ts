import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersBaseComponent } from '@app/pages/customers/customers-base/customers-base.component';

const routes: Routes = [
  { path: '', component: CustomersBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
