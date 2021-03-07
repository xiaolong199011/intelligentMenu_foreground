import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatebbscommentmanagerPage } from './updatebbscommentmanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatebbscommentmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatebbscommentmanagerPageRoutingModule {}
