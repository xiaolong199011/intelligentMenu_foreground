import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatebbstopicmanagerPage } from './updatebbstopicmanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatebbstopicmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatebbstopicmanagerPageRoutingModule {}
