import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportBaseComponent } from './transport-base/transport-base.component';
import { TransportChargesComponent } from './transport-charges/transport-charges.component';
import { SharedModule } from '@app/shared/shared.module';
import { SearchTransportComponent } from './search-transport/search-transport.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ImportTransportsComponent } from './import-transports/import-transports.component';
import { AddNewTransportChargesComponent } from './add-new-transport-charges/add-new-transport-charges.component';
import { EditTransportListComponent } from './edit-transport-list/edit-transport-list.component';

@NgModule({
  imports: [
    CommonModule,
    TransportRoutingModule,
    SharedModule
  ],
  declarations: [TransportBaseComponent, TransportChargesComponent, SearchTransportComponent, TransportListComponent, AddNewComponent, ImportTransportsComponent, AddNewTransportChargesComponent, EditTransportListComponent]
})
export class TransportModule { }
