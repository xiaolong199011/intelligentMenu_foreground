import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucommentPageRoutingModule } from './menucomment-routing.module';

import { MenucommentPage } from './menucomment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucommentPageRoutingModule
  ],
  declarations: [MenucommentPage]
})
export class MenucommentPageModule {}
