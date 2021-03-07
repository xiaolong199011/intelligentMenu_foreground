import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingmenuPage } from './shoppingmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingmenuPageRoutingModule {}
