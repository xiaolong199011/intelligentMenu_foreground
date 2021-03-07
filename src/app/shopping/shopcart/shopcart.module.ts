import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopcartPageRoutingModule } from './shopcart-routing.module';

import { ShopcartPage } from './shopcart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopcartPageRoutingModule
  ],
  declarations: [ShopcartPage]
})
export class ShopcartPageModule {}
