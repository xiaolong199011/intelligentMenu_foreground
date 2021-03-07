import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucommentmanagerPageRoutingModule } from './menucommentmanager-routing.module';

import { MenucommentmanagerPage } from './menucommentmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucommentmanagerPageRoutingModule
  ],
  declarations: [MenucommentmanagerPage]
})
export class MenucommentmanagerPageModule {}
