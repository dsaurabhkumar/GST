import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportBaseComponent } from '@app/pages/transport/transport-base/transport-base.component';
import { TransportChargesComponent } from '@app/pages/transport/transport-charges/transport-charges.component';

const routes: Routes = [
  { path: '', component: TransportBaseComponent},
  { path: 'transportCharges', component: TransportChargesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
