import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingmanagerPageRoutingModule } from './shoppingmanager-routing.module';

import { ShoppingmanagerPage } from './shoppingmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingmanagerPageRoutingModule
  ],
  declarations: [ShoppingmanagerPage]
})
export class ShoppingmanagerPageModule {}
