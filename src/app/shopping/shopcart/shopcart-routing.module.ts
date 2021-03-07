import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopcartPage } from './shopcart.page';

const routes: Routes = [
  {
    path: '',
    component: ShopcartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopcartPageRoutingModule {}
