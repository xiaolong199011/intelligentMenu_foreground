import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatefavouritemanagerPageRoutingModule } from './updatefavouritemanager-routing.module';

import { UpdatefavouritemanagerPage } from './updatefavouritemanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatefavouritemanagerPageRoutingModule
  ],
  declarations: [UpdatefavouritemanagerPage]
})
export class UpdatefavouritemanagerPageModule {}
