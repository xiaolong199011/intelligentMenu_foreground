import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingmanagerPage } from './shoppingmanager.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingmanagerPageRoutingModule {}
