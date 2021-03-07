import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouritemanagerPage } from './favouritemanager.page';

const routes: Routes = [
  {
    path: '',
    component: FavouritemanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouritemanagerPageRoutingModule {}
