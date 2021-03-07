import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucommentPage } from './menucomment.page';

const routes: Routes = [
  {
    path: '',
    component: MenucommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucommentPageRoutingModule {}
