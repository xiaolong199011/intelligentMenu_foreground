import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateshoppingmanagerPage } from './updateshoppingmanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateshoppingmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateshoppingmanagerPageRoutingModule {}
