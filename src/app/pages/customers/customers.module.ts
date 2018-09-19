import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersBaseComponent } from './customers-base/customers-base.component';
import { SearchCustomerVendorComponent } from './search-customer-vendor/search-customer-vendor.component';
import { CustomerVendorListComponent } from './customer-vendor-list/customer-vendor-list.component';
import { AddNewComponent } from './add-new/add-new.component';
import { ImportCustomersComponent } from './import-customers/import-customers.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [CustomersBaseComponent, SearchCustomerVendorComponent, CustomerVendorListComponent, AddNewComponent, ImportCustomersComponent]
})
export class CustomersModule { }
