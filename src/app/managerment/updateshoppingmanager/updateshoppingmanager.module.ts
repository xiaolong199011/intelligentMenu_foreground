import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateshoppingmanagerPageRoutingModule } from './updateshoppingmanager-routing.module';

import { UpdateshoppingmanagerPage } from './updateshoppingmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateshoppingmanagerPageRoutingModule
  ],
  declarations: [UpdateshoppingmanagerPage]
})
export class UpdateshoppingmanagerPageModule {}
