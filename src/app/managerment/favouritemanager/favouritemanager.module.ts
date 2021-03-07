import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritemanagerPageRoutingModule } from './favouritemanager-routing.module';

import { FavouritemanagerPage } from './favouritemanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritemanagerPageRoutingModule
  ],
  declarations: [FavouritemanagerPage]
})
export class FavouritemanagerPageModule {}
