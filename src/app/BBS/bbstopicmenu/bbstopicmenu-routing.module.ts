import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbstopicmenuPage } from './bbstopicmenu.page';

const routes: Routes = [
  {
    path: '',
    component: BbstopicmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BbstopicmenuPageRoutingModule {}
