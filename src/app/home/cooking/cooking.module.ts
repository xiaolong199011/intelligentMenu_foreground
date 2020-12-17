import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookingPageRoutingModule } from './cooking-routing.module';

import { CookingPage } from './cooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookingPageRoutingModule
  ],
  declarations: [CookingPage]
})
export class CookingPageModule {}
