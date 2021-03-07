import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatebbscommentmanagerPageRoutingModule } from './updatebbscommentmanager-routing.module';

import { UpdatebbscommentmanagerPage } from './updatebbscommentmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatebbscommentmanagerPageRoutingModule
  ],
  declarations: [UpdatebbscommentmanagerPage]
})
export class UpdatebbscommentmanagerPageModule {}
