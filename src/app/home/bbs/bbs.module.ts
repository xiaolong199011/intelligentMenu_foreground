import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBSPageRoutingModule } from './bbs-routing.module';

import { BBSPage } from './bbs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBSPageRoutingModule
  ],
  declarations: [BBSPage]
})
export class BBSPageModule {}
