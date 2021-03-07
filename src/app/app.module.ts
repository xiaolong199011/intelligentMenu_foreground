import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Crud } from '../app/common/crud';
import {ComParam} from '../app/common/comParam';
import { Json } from '../app/common/json';
import {ComService} from './common/ComService'
import {HttpClientModule} from '@angular/common/http';
import { MenuInfo } from './models/MenuInfo';
import {ShopMenuInfo} from './models/ShopMenuInfo';
import { BBSTopic } from './models/BBSTopic';
import { DatePipe } from '@angular/common';
import { BBSComment } from './models/BBSComment';
import { Favourite } from './models/Favourite';
import { Admin } from './models/Admin';
import {User} from './models/User';
import { MenuComment } from './models/MenuComment';
import {Material} from './models/Material';
 import {ShopCart} from './models/ShopCart';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Crud,
    ComParam,
    Json,
    ComService,
    MenuInfo,
    ShopMenuInfo,
    BBSTopic,
    DatePipe,
    BBSComment,
    Favourite,
    Admin,
    User,
    MenuComment,
    Material,
    ShopCart,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
