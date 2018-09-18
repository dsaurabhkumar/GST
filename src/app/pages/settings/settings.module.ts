import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsBaseComponent } from './settings-base/settings-base.component';
import { SharedModule } from '@app/shared/shared.module';
import { MembershipDetailsComponent } from '@app/pages/settings/membership-details/membership-details.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [SettingsBaseComponent, MembershipDetailsComponent]
})
export class SettingsModule { }
