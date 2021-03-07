import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbsmanagerPage } from './bbsmanager.page';

const routes: Routes = [
  {
    path: '',
    component: BbsmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbsmanagerPageRoutingModule {}
