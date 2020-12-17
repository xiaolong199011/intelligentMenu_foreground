import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbsdetailPage } from './bbsdetail.page';

const routes: Routes = [
  {
    path: '',
    component: BbsdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbsdetailPageRoutingModule {}
