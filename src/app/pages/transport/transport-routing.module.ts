import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportBaseComponent } from '@app/pages/transport/transport-base/transport-base.component';
import { TransportChargesComponent } from '@app/pages/transport/transport-charges/transport-charges.component';
import { AddNewComponent } from '@app/pages/transport/add-new/add-new.component';
import { AddNewTransportChargesComponent } from '@app/pages/transport/add-new-transport-charges/add-new-transport-charges.component';

const routes: Routes = [
  { path: '', component: TransportBaseComponent},
  { path: 'transportCharges', component: TransportChargesComponent},
  {
    path: 'add-new-transport',
    component: AddNewComponent
  },
  {
    path: 'add-new-transport-charges',
    component: AddNewTransportChargesComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
