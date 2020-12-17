import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingdetailPage } from './shoppingdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingdetailPageRoutingModule {}
