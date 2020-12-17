import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenudetailPage } from './menudetail.page';

const routes: Routes = [
  {
    path: '',
    component: MenudetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenudetailPageRoutingModule {}
