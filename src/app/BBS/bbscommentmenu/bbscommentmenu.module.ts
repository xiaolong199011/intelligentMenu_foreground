import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbscommentmenuPageRoutingModule } from './bbscommentmenu-routing.module';

import { BbscommentmenuPage } from './bbscommentmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbscommentmenuPageRoutingModule
  ],
  declarations: [BbscommentmenuPage]
})
export class BbscommentmenuPageModule {}
