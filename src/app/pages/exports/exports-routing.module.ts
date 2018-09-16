import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportsBaseComponent } from '@app/pages/exports/exports-base/exports-base.component';

const routes: Routes = [
  { path: '', component: ExportsBaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportsRoutingModule { }
