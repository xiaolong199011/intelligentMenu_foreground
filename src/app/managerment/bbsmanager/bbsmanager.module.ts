import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbsmanagerPageRoutingModule } from './bbsmanager-routing.module';

import { BbsmanagerPage } from './bbsmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbsmanagerPageRoutingModule
  ],
  declarations: [BbsmanagerPage]
})
export class BbsmanagerPageModule {}
