import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersBaseComponent } from '@app/pages/customers/customers-base/customers-base.component';
import { AddNewComponent } from '@app/pages/customers/add-new/add-new.component';

const routes: Routes = [
  { path: '', component: CustomersBaseComponent},
  {
    path: 'add-new-customer',
    component: AddNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
