import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbscommentmenuPage } from './bbscommentmenu.page';

const routes: Routes = [
  {
    path: '',
    component: BbscommentmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbscommentmenuPageRoutingModule {}
