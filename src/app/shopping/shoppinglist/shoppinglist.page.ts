import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymodelComponent } from '../paymodel/paymodel.component';
import { ComService } from '../../common/ComService';
import { ComParam } from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
import { ShopMenuInfo } from '../../models/ShopMenuInfo';
import { Favourite } from '../../models/Favourite';
import { ActivatedRoute, Params } from '@angular/router';
import { ShopCart } from '../../models/ShopCart';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.page.html',
  styleUrls: ['./shoppinglist.page.scss'],
})
export class ShoppinglistPage implements OnInit {

  private picUrl: string;
  private shopMenuListInfo: any;
  private userid: number;
  private favouriteList: Array<Favourite>;
  private type: string;
  private shopCartList: Array<ShopCart>;

  constructor(
    public modalController: ModalController,
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private router: Router,
    private shopMenuInfo: ShopMenuInfo,
    private favourite: Favourite,
    private el: ElementRef,
    private renderer2: Renderer2,
    private routeinfo: ActivatedRoute,
    private shopCart: ShopCart,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
      this.ngAfterContentInit();
    })
  }

  ngOnInit() {

    this.picUrl = this.comParam.showFile;
    this.userid = Number(sessionStorage.getItem('userid'));
    this.favourite.commentid = 0;
    this.favourite.menuid = 0;
    this.favourite.shoppingid = 0;
    this.favourite.topicid = 0;
    this.type = this.routeinfo.snapshot.queryParams['type'];
    console.log(this.type);
    this.getAllShopMenu();
    this.shopCartList = new Array();
  }

  ngAfterContentInit() {

    setTimeout(() => { this.initialFavourite(this.userid); }, 500)
  }

  getAllShopMenu() {
    // this.crud.getAllInfo(this.comParam.getAllShopMenu).subscribe((response: any) => {
    //   this.shopMenuListInfo = response.data;
    //   })

    this.crud.getbyParam(this.comParam.getShopMenuByType, this.type).subscribe((response: any) => {
      if (response.code === 200) {
        this.shopMenuListInfo = response.data;
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
        this.comService.alertInfo(response.message);
        this.crud.updateInfo(this.comParam.updateShopMenu, this.shopMenuInfo).subscribe((response: any) => {
          if (200 === response.code) {
            this.comService.alertInfo(response.message);
            this.getAllShopMenu();
            this.initialFavourite(this.userid);
          } else {
            this.comService.alertInfo(response.message);
          }
        })
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  // async checkout() {
  //   const modal = await this.modalController.create({
  //     showBackdrop: true,
  //     component: PaymodelComponent,
  //     componentProps: { value: 123 },
  //     // cssClass: 'my-custom-class'
  //   });
  //   await modal.present();
  //   //  const { data } = await modal.onDidDismiss();
  //   //  console.log(data);
  // }

  checkout() {
    if (this.shopCartList.length == 0) {
      this.comService.alertInfo("购物车里没有商品，请添加后结算")
    } else {
      sessionStorage.removeItem('shopCart');
      sessionStorage.setItem('shopCart', JSON.stringify(this.shopCartList));
      this.router.navigate(['/user/shopcart'], { queryParams: { type: this.type } });
    }
  }

  clickFavourite(shoppingid: number) {
    //喜欢没有变红 document.getElementById('shopping'+shoppingid.toString()).style.color!='red'
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
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + shoppingid.toString()), 'color', 'red');
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavourite(id: number, shoppingid: number) {
    this.crud.getById(this.comParam.deleteFavouriteById, id).subscribe((response: any) => {
      if (200 === response.code) {
        //document.getElementById(shoppingid.toString()).className = "ios hydrated";
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + shoppingid.toString()), 'color', '');
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  initialFavourite(userid: number) {
    this.crud.getById(this.comParam.getFavouriteByUserId, userid).subscribe((response: any) => {
      if (200 === response.code) {
        this.favouriteList = response.data;
        for (const iterator of this.favouriteList) {
          if (0 != iterator.shoppingid) {
            //document.getElementById(iterator.shoppingid.toString()).className = "ios hydrated iconColorRed";
            if(this.el.nativeElement.querySelector('#shopping' + iterator.shoppingid.toString())!=null){
              this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + iterator.shoppingid.toString()), 'color', 'red');
            }
            }
            
        }
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }
  addShopCart(id: number) {
    this.crud.getById(this.comParam.getShopMenuById, id).subscribe((response: any) => {
      if (200 === response.code) {
        this.shopMenuInfo = response.data;

        //this.shopCart.amount =  this.shopCart.amount+1;
        //购物车找不到选中商品的id

        let index = this.shopCartList.findIndex((element) => (element.id == this.shopMenuInfo.id));
        if (index == -1) {
          this.shopCart = new ShopCart();
          this.shopCart.id = this.shopMenuInfo.id;
          this.shopCart.amount = 1;
          this.shopCart.shopMenu = this.shopMenuInfo;
          //将该商品添加到购物车
          this.shopCartList.push(this.shopCart);
        } else {
          //把选中的商品从购物车提取出来，数量+1
          this.shopCart = this.shopCartList[index];
          this.shopCart.amount = this.shopCart.amount + 1;
          this.shopCart.shopMenu = this.shopMenuInfo;
          //删除购物车原有信息并把数量+1的选中商品重新加入
          this.shopCartList.splice(index, 1, this.shopCart);
        }
      } else {
        this.comService.alertInfo(response.message);
      }
      console.log(JSON.stringify(this.shopCartList));
    })
  }
}
