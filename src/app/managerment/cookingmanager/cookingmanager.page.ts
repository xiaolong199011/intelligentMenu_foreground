import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { MenuInfo } from '../../models/MenuInfo';
import {User} from '../../models/User';
import { Favourite } from '../../models/Favourite';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cookingmanager',
  templateUrl: './cookingmanager.page.html',
  styleUrls: ['./cookingmanager.page.scss'],
})
export class CookingmanagerPage implements OnInit {

  private menuList:Array<MenuInfo>;
  private itemvalue:number;
  private menuFavouriteList:Array<Favourite>;


  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private menuInfo:MenuInfo,
    private user:User,
    private favourite:Favourite,
    private router:Router,
    private routeinfo: ActivatedRoute,
    
  ) {
    //this.router.onSameUrlNavigation='reload';
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.getAllMenu();
  }

  getAllMenu(){
    this.menuList = new Array();
    this.crud.getAllInfo(this.comParam.getAllMenu).subscribe((response: any) => {
    this.menuList = response.data; 
    })
  }

  delMenuById(id:number){
    this.getFavourite(id);
    this.crud.getById(this.comParam.deleteMenuById,id).subscribe((response: any) => {
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

  getFavourite(menuid:number){
    this.crud.getById(this.comParam.getFavouriteByMenuId, menuid).subscribe((response: any) => {
      if (200 === response.code) {
        this.menuFavouriteList = response.data;
        if( this.menuFavouriteList.length!=0){
          for (const iterator of this.menuFavouriteList) {
            this.deleteFavouriteById(iterator.id);
          }
        }
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  updateMenu(id:number){
    this.router.navigate(['/manager/updatemanager/updatecookingmanager'],{queryParams: {id: id}});
  }

  refreshPage(){
    this.ngOnInit();
  }
}
