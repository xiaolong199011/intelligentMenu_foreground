import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingdetailPageRoutingModule } from './shoppingdetail-routing.module';

import { ShoppingdetailPage } from './shoppingdetail.page';
import { PaymodelComponent } from '../paymodel/paymodel.component';
import { ToastController } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingdetailPageRoutingModule,
  ],
  declarations: [ShoppingdetailPage,PaymodelComponent],
  entryComponents:[PaymodelComponent]
})
export class ShoppingdetailPageModule {}
