import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ComService } from '../../common/ComService';
import { ComParam } from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Favourite } from '../../models/Favourite';
import { MenuInfo } from '../../models/MenuInfo';
import { ShopMenuInfo } from '../../models/ShopMenuInfo';
import { BBSComment } from '../../models/BBSComment';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  private favouriteList: Array<Favourite>;
  private userid: number;
  private menuList: Array<MenuInfo>;
  private tab: String = "menu";
  private showPicUrl: string;
  private shopMenuList: Array<ShopMenuInfo>;
  private bbsCommentList: Array<BBSComment>;

  constructor(
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private favourite: Favourite,
    private menu: MenuInfo,
    private el: ElementRef,
    private renderer2: Renderer2,
    private shopMenu: ShopMenuInfo,
    private bbsSComment: BBSComment,
    private routeinfo: ActivatedRoute,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
   }

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('userid'));
    this.showPicUrl = this.comParam.showFile;
    this.menuList = new Array();
    this.initialAllFavourite(this.userid);
  }

  ngAfterContentChecked() {
    switch (this.tab) {
      case 'menu':
        setTimeout(() => { this.initialCookingFavourite(); }, 800);
        break;
      case 'shopping':
        setTimeout(() => { this.initialshoppingFavourite(); }, 800);
        break;
      case 'bbscomment':
        setTimeout(() => { this.initialBBSCommentFavourite(); }, 800);
        break;
      default:
        break;
    }
  }

  initialAllFavourite(userid: number) {
     this.menuList = new Array();
     this.shopMenuList = new Array();
     this.bbsCommentList = new Array();
     this.favouriteList = new Array();
    this.crud.getById(this.comParam.getFavouriteByUserId, userid).subscribe((response: any) => {
      if (200 === response.code) {
        this.favouriteList = response.data;

    this.menuList.splice(0,this.menuList.length);
    this.shopMenuList.splice(0,this.shopMenuList.length);
    this.bbsCommentList.splice(0,this.bbsCommentList.length);

        for (const iterator of this.favouriteList) {

          if (0 != iterator.menuid) {
            this.getMenuInfo(iterator.menuid);
          }
          if (0 != iterator.shoppingid) {
            this.getShopMenu(iterator.shoppingid);
          }
          if (0 != iterator.commentid) {
            this.getBBSCommentMenu(iterator.commentid);
          }
        }
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  getMenuInfo(menuid: number) {
    this.crud.getById(this.comParam.getMenuById, menuid).subscribe((response: any) => {
      if (200 === response.code) {
        this.menu = response.data;
        this.menuList.push(this.menu);
      } else {
        this.comService.alertInfo(response.message);
      }
    });
  }

  getShopMenu(shoppingid: number) {
    this.crud.getById(this.comParam.getShopMenuById, shoppingid).subscribe((response: any) => {
      if (200 === response.code) {
        this.shopMenu = response.data;
        this.shopMenuList.push(this.shopMenu);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }
  getBBSCommentMenu(commentid: number) {
    this.crud.getById(this.comParam.getBBSCommentsById, commentid).subscribe((response: any) => {
      if (200 === response.code) {
        this.bbsSComment = response.data;
        this.bbsCommentList.push(this.bbsSComment);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }



  initialCookingFavourite() {
    for (const iterator of this.menuList) {
      if (this.tab == 'menu') {
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#menu' + iterator.id.toString()), 'color', 'red');
      }

    }
  }
  initialshoppingFavourite() {
    for (const iterator of this.shopMenuList) {
      if (this.tab == 'shopping') {
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#shopping' + iterator.id.toString()), 'color', 'red');
      }
    }
  }

  initialBBSCommentFavourite() {
    for (const iterator of this.bbsCommentList) {
      if (this.tab == 'bbscomment') {
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#comment' + iterator.id.toString()), 'color', 'red');
      }
    }
  }

  cancelMenuFavourite(menuid: number) {
    this.crud.getByTwoId(this.comParam.getFavouriteMenuByUserIdMenuId, this.userid, menuid).subscribe((response: any) => {
      if (200 === response.code) {
        this.favourite = response.data;
        this.deleteFavoutiteById(this.favourite.id);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  cancelShopMenuFavourite(shoppMenuid: number) {
    this.crud.getByTwoId(this.comParam.getFavouriteShoppingByUserIdShoppingId, this.userid, shoppMenuid).subscribe((response: any) => {
      if (200 === response.code) {
        this.favourite = response.data;
        this.deleteFavoutiteById(this.favourite.id);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  cancelBBSCommentFavourite(shoppMenuid: number) {
    this.crud.getByTwoId(this.comParam.getFavouriteBBSCommentByUserIdCommentId, this.userid, shoppMenuid).subscribe((response: any) => {
      if (200 === response.code) {
        this.favourite = response.data;
        this.deleteFavoutiteById(this.favourite.id);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavoutiteById(id: number) {
    this.crud.getById(this.comParam.deleteFavouriteById, id).subscribe((response: any) => {
      if (200 === response.code) {
        this.ngOnInit();
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  loginOff() {
    this.comService.userLoginOff();
  }

  refreshPage(){
    this.ngOnInit();
  }
}
