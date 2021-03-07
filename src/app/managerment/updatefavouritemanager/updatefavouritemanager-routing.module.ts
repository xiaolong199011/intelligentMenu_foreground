import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatefavouritemanagerPage } from './updatefavouritemanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatefavouritemanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatefavouritemanagerPageRoutingModule {}
