import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root.component';
import { CoreModule } from '../core/core.module';
import { RootRoutingModule } from './root-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '@app/shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RootRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
