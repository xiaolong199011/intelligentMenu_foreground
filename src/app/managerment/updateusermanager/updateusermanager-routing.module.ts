import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateusermanagerPage } from './updateusermanager.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateusermanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateusermanagerPageRoutingModule {}
