import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbsdetailPageRoutingModule } from './bbsdetail-routing.module';

import { BbsdetailPage } from './bbsdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbsdetailPageRoutingModule
  ],
  declarations: [BbsdetailPage]
})
export class BbsdetailPageModule {}
