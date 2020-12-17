import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenudetailPageRoutingModule } from './menudetail-routing.module';

import { MenudetailPage } from './menudetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenudetailPageRoutingModule
  ],
  declarations: [MenudetailPage]
})
export class MenudetailPageModule {}
