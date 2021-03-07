import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecookingmanagerPage } from './updatecookingmanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecookingmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecookingmanagerPageRoutingModule {}
