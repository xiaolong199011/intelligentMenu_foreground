import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookingmanagerPageRoutingModule } from './cookingmanager-routing.module';

import { CookingmanagerPage } from './cookingmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookingmanagerPageRoutingModule
  ],
  declarations: [CookingmanagerPage]
})
export class CookingmanagerPageModule {}
