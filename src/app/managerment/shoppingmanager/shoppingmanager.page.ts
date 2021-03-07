import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import {User} from '../../models/User';
import { Favourite } from '../../models/Favourite';
import {ShopMenuInfo} from '../../models/ShopMenuInfo';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingmanager',
  templateUrl: './shoppingmanager.page.html',
  styleUrls: ['./shoppingmanager.page.scss'],
})
export class ShoppingmanagerPage implements OnInit {

  private shoppingList:Array<ShopMenuInfo>;
  private shoppingFavouriteList:Array<Favourite>;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private shopMenuInfo:ShopMenuInfo,
    private user:User,
    private favourite:Favourite,
    private routeinfo: ActivatedRoute,
    private router:Router,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.getAllShopMenu();
  }

  getAllShopMenu(){
    this.crud.getAllInfo(this.comParam.getAllShopMenu).subscribe((response: any) => {
      this.shoppingList = response.data;
      })
  }

  delShopMenuById(id:number){
    this.getFavourite(id);
    this.crud.getById(this.comParam.deleteShopMenuById,id).subscribe((response: any) => {
      if(200===response.code){
        this.ngOnInit();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavouriteById(id:number){
    this.crud.getById(this.comParam.deleteFavouriteById,id).subscribe((response: any) => {
      if(200===response.code){
        this.comService.alertInfo(response.message);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  getFavourite(shoppingid:number){
    this.crud.getById(this.comParam.getFavouriteByShoppingId, shoppingid).subscribe((response: any) => {
      if (200 === response.code) {
        this.shoppingFavouriteList = response.data;
        if( this.shoppingFavouriteList.length!=0){
          for (const iterator of this.shoppingFavouriteList) {
            this.deleteFavouriteById(iterator.id);
          }
        }
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  refreshPage(){
    this.ngOnInit();
  }

  // addShopMenu(){
  //   this.router.navigate(['/user/shopping']);
  // }

  addShopMenu(){
    this.router.navigate(['user/menu']);
  }

}
