import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopCart } from '../../models/ShopCart';
import { ComService } from '../../common/ComService';
import { ComParam } from '../../common/comParam';
import { Crud } from '../../common/crud';
import { ShopMenuInfo } from '../../models/ShopMenuInfo';
import { ModalController } from '@ionic/angular';
import { PaymodelComponent } from '../paymodel/paymodel.component';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.page.html',
  styleUrls: ['./shopcart.page.scss'],
})
export class ShopcartPage implements OnInit {
  private type: string;
  private shopCartList:Array<ShopCart>;
  private ShopMenuList:Array<ShopMenuInfo>;
  private picUrl: string;
  private totalExpense:number;
  constructor(
    private routeinfo: ActivatedRoute,
    private shopCart: ShopCart,
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private shopMenuInfo:ShopMenuInfo,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.type = this.routeinfo.snapshot.queryParams['type'];
    console.log(this.type);
    console.log();
    this.ShopMenuList = new Array();
    this.picUrl = this.comParam.showFile;
    this.getShopCart();
    
  }

  getShopCart() {
    this.shopCartList = JSON.parse(sessionStorage.getItem('shopCart'));
    this.totalExpense=0;
    for (const iterator of this.shopCartList) {
      this.totalExpense = this.totalExpense+iterator.shopMenu.materialprice*iterator.amount;
      console.log(this.totalExpense);
    }
  }

    async checkout() {
    const modal = await this.modalController.create({
      showBackdrop: true,
      component: PaymodelComponent,
      componentProps: { value: 123 },
      // cssClass: 'my-custom-class'
    });
    await modal.present();
    //  const { data } = await modal.onDidDismiss();
    //  console.log(data);
  }
}
