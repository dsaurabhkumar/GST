import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Gstr1Component } from '@app/pages/gst-return-filing/gstr-1/gstr-1.component';
import { B2bComponent } from './b2b/b2b.component';
import { B2clComponent } from './b2cl/b2cl.component';
import { B2csComponent } from './b2cs/b2cs.component';
import { CdnrComponent } from './cdnr/cdnr.component';
import { CdnurComponent } from './cdnur/cdnur.component';
import { ExpComponent } from './exp/exp.component';
import { AtComponent } from './at/at.component';
import { AtadjComponent } from './atadj/atadj.component';
import { ExempComponent } from './exemp/exemp.component';
import { HsnComponent } from './hsn/hsn.component';

const routes: Routes = [
  { path: '', component: Gstr1Component,
  children: [
    { path: '', redirectTo: 'b2b', pathMatch: 'full' },
    { path: 'b2b', component: B2bComponent },
    { path: 'b2cl', component: B2clComponent },
    { path: 'b2cs', component: B2csComponent },
    { path: 'cdnr', component: CdnrComponent },
    { path: 'cdnur', component: CdnurComponent },
    { path: 'exp', component: ExpComponent },
    { path: 'at', component: AtComponent },
    { path: 'atadj', component: AtadjComponent },
    { path: 'exemp', component: ExempComponent },
    { path: 'hsn', component: HsnComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GstReturnFilingRoutingModule { }
