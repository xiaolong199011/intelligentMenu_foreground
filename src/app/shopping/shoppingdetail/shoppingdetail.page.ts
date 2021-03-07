import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ComService } from '../../common/ComService';
import { ComParam } from '../../common/comParam';
import { Crud } from '../../common/crud';

import { ModalController } from '@ionic/angular';
import { PaymodelComponent } from '../paymodel/paymodel.component';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopMenuInfo } from '../../models/ShopMenuInfo';
import { Favourite } from '../../models/Favourite';

@Component({
  selector: 'app-shoppingdetail',
  templateUrl: './shoppingdetail.page.html',
  styleUrls: ['./shoppingdetail.page.scss'],
})
export class ShoppingdetailPage implements OnInit {

  private id: number;
  private picUrl: string;
  private userid: number;
  private favouriteList: Array<Favourite>;

  constructor(
    public modalController: ModalController,
    private routeinfo: ActivatedRoute,
    private shopMenuInfo: ShopMenuInfo,
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private favourite: Favourite,
    private el: ElementRef,
    private renderer2: Renderer2,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
      this.ngAfterContentInit();
    })
  }

  ngOnInit() {
    this.id = this.routeinfo.snapshot.queryParams['id'];

    this.picUrl = this.comParam.showFile;
    this.userid = Number(sessionStorage.getItem('userid'));
    this.favourite.commentid = 0;
    this.favourite.menuid = 0;
    this.favourite.shoppingid = 0;
    this.favourite.topicid = 0;
    this.getShopMenu();
  }
  ngAfterContentInit() {
    //this.initialFavourite(this.userid,this.id);
    setTimeout(() => { this.initialFavourite(this.userid, this.id); }, 500)
  }

  getShopMenu() {
    this.crud.getById(this.comParam.getShopMenuById, this.id).subscribe((response: any) => {
      if (200 === response.code) {
        this.shopMenuInfo = response.data;
      } else {
        this.comService.alertInfo(response.message);
      }
    })
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

  clickFavourite(shoppingid: number) {
    //喜欢没有变红 document.getElementById('menu'+shoppingid.toString()).style.color!='red'
    if (document.getElementById('shopping' + shoppingid.toString()).style.color != 'red') {
      this.createFavourite(this.favourite, shoppingid);
    } else {
      this.crud.getByTwoId(this.comParam.getFavouriteShoppingByUserIdShoppingId, this.userid, shoppingid).subscribe((response: any) => {
        if (200 === response.code) {
          this.favourite = response.data;
          this.deleteFavourite(this.favourite.id, shoppingid);
        } else {
          this.comService.alertInfo(response.message);
        }
      })
    }
  }

  createFavourite(favourite: Favourite, shoppingid: number) {
    this.favourite.userid = this.userid;
    this.favourite.shoppingid = shoppingid;
    this.crud.saveForm(this.comParam.saveFavourite, favourite).subscribe((response: any) => {
      if (200 === response.code) {
        //document.getElementById(shoppingid.toString()).className="ios hydrated iconColorRed";
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + this.shopMenuInfo.id), 'color', 'red');
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavourite(id: number, shoppingid: number) {
    this.crud.getById(this.comParam.deleteFavouriteById, id).subscribe((response: any) => {
      if (200 === response.code) {
        //document.getElementById(shoppingid.toString()).className = "ios hydrated";
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + this.shopMenuInfo.id), 'color', '');
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  initialFavourite(userid: number, shoppingid: number) {
    this.crud.getByTwoId(this.comParam.getFavouriteShoppingByUserIdShoppingId, this.userid, shoppingid).subscribe((response: any) => {
      if (200 === response.code) {
        //document.getElementById(shoppingid.toString()).className="ios hydrated iconColorRed";
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + this.shopMenuInfo.id), 'color', 'red');
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  clickZan(id) {
    this.crud.getById(this.comParam.getShopMenuById, id).subscribe((response: any) => {
      if (200 === response.code) {
        this.shopMenuInfo = response.data;
        this.shopMenuInfo.zan = this.shopMenuInfo.zan + 1;
        this.crud.updateInfo(this.comParam.updateShopMenu, this.shopMenuInfo).subscribe((response: any) => {
          if (200 === response.code) {
            this.getShopMenu();
            this.initialFavourite(this.userid, this.id);
          } else {
            this.comService.alertInfo(response.message);
          }
        })
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }
}
