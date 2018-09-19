import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsBaseComponent } from '@app/pages/settings/settings-base/settings-base.component';
import { EditOrganisationComponent } from '@app/pages/settings/edit-organisation/edit-organisation.component';
import { EditUserComponent } from '@app/pages/settings/edit-user/edit-user.component';
import { EditInvoiceComponent } from '@app/pages/settings/edit-invoice/edit-invoice.component';

const routes: Routes = [
  { path: '', component: SettingsBaseComponent},
  { path: 'edit-organisation', component: EditOrganisationComponent},
  { path: 'edit-user', component: EditUserComponent},
  { path: 'edit-invoice', component: EditInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
