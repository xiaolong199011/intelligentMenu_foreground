import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBSPage } from './bbs.page';

const routes: Routes = [
  {
    path: '',
    component: BBSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBSPageRoutingModule {}
