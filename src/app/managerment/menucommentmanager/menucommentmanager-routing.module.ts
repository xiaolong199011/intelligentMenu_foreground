import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucommentmanagerPage } from './menucommentmanager.page';

const routes: Routes = [
  {
    path: '',
    component: MenucommentmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucommentmanagerPageRoutingModule {}
