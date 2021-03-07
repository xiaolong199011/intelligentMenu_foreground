import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingmenuPageRoutingModule } from './shoppingmenu-routing.module';

import { ShoppingmenuPage } from './shoppingmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingmenuPageRoutingModule
  ],
  declarations: [ShoppingmenuPage]
})
export class ShoppingmenuPageModule {}
