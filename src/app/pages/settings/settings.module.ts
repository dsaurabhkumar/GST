import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsBaseComponent } from './settings-base/settings-base.component';
import { SharedModule } from '@app/shared/shared.module';
import { MembershipDetailsComponent } from '@app/pages/settings/membership-details/membership-details.component';
import { OrganisationDetailsComponent } from './organisation-details/organisation-details.component';
import { InvoiceOptionsComponent } from './invoice-options/invoice-options.component';
import { InventoryOptionsComponent } from './inventory-options/inventory-options.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { EditOrganisationComponent } from './edit-organisation/edit-organisation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SettingsBaseComponent, MembershipDetailsComponent, OrganisationDetailsComponent, InvoiceOptionsComponent, InventoryOptionsComponent, UserDetailsComponent, EditUserComponent, EditInvoiceComponent, EditOrganisationComponent]
})
export class SettingsModule { }
