import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbstopicmenuPageRoutingModule } from './bbstopicmenu-routing.module';

import { BbstopicmenuPage } from './bbstopicmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbstopicmenuPageRoutingModule
  ],
  declarations: [BbstopicmenuPage]
})
export class BbstopicmenuPageModule {}
