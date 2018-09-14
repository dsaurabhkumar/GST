import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { DashboardRoutingModule } from './dashboard-routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardBaseComponent]
})
export class DashboardModule { }
