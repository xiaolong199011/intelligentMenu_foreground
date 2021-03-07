import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatemenucommentmanagerPageRoutingModule } from './updatemenucommentmanager-routing.module';

import { UpdatemenucommentmanagerPage } from './updatemenucommentmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatemenucommentmanagerPageRoutingModule
  ],
  declarations: [UpdatemenucommentmanagerPage]
})
export class UpdatemenucommentmanagerPageModule {}
