import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersBaseComponent } from '@app/pages/customers/customers-base/customers-base.component';
import { AddNewComponent } from '@app/pages/customers/add-new/add-new.component';
import { ImportCustomersComponent } from '@app/pages/customers/import-customers/import-customers.component';

const routes: Routes = [
  { path: '', component: CustomersBaseComponent},
  {
    path: 'add-new-customer',
    component: AddNewComponent
  }
  // {
  //   path: 'import-customers',
  //   component: ImportCustomersComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
