import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatebbstopicmanagerPageRoutingModule } from './updatebbstopicmanager-routing.module';

import { UpdatebbstopicmanagerPage } from './updatebbstopicmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatebbstopicmanagerPageRoutingModule
  ],
  declarations: [UpdatebbstopicmanagerPage]
})
export class UpdatebbstopicmanagerPageModule {}
