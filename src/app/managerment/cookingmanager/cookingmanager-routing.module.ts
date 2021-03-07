import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookingmanagerPage } from './cookingmanager.page';

const routes: Routes = [
  {
    path: '',
    component: CookingmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookingmanagerPageRoutingModule {}
