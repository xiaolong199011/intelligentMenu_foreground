import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsmanagerPageRoutingModule } from './tabsmanager-routing.module';

import { TabsmanagerPage } from './tabsmanager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsmanagerPageRoutingModule
  ],
  declarations: [TabsmanagerPage]
})
export class TabsmanagerPageModule {}
