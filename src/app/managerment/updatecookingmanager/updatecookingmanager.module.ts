import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecookingmanagerPageRoutingModule } from './updatecookingmanager-routing.module';

import { UpdatecookingmanagerPage } from './updatecookingmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecookingmanagerPageRoutingModule
  ],
  declarations: [UpdatecookingmanagerPage]
})
export class UpdatecookingmanagerPageModule {}
