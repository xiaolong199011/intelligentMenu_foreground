import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatemenucommentmanagerPage } from './updatemenucommentmanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatemenucommentmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatemenucommentmanagerPageRoutingModule {}
