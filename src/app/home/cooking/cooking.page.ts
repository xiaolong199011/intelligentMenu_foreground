import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../models/MenuInfo';
import { HttpClient } from '@angular/common/http';
import { Json } from 'src/app/common/json';
import {CommonResult} from '../../common/CommonResult';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Favourite } from '../../models/Favourite';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.page.html',
  styleUrls: ['./cooking.page.scss'],
})
export class CookingPage implements OnInit {

  private response:CommonResult;
  //private menuListInfo:any;
  private menuListInfo:Array<MenuInfo>;
  private showPicUrl:string;
  private changeColor: boolean;
  private userid:number;
  private favouriteList:Array<Favourite>;
  private menuname:string;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private http: HttpClient,
    private json: Json,
    private crud: Crud, 
    private menuInfo:MenuInfo,
    private favourite:Favourite,
    private routeinfo: ActivatedRoute,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
      this.ngAfterContentInit();
    })
  }

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('userid'));
    this.GetAllMenu();
    this.showPicUrl=this.comParam.showFile;
    this.changeColor = false;

    this.favourite.commentid=0;
    this.favourite.menuid=0;
    this.favourite.shoppingid=0;
    this.favourite.topicid=0;
  }

  ngAfterContentInit(){
    setTimeout(() => {this.initialFavourite(this.userid);},500)
  }

  GetAllMenu(){
    this.crud.getAllInfo(this.comParam.getAllMenu).subscribe((response: any) => {
    this.menuListInfo = response.data; 
    })

  }

  clickZan(id) {
    this.crud.getById(this.comParam.getMenuById, id).subscribe((response: any) => {
      if (200 === response.code) {
        this.menuInfo = response.data;
        this.menuInfo.zan = this.menuInfo.zan + 1;
        this.crud.updateInfo(this.comParam.updateMenu, this.menuInfo).subscribe((response: any) => {
          if (200 === response.code) {
            this.GetAllMenu();
            setTimeout(() => {this.initialFavourite(this.userid);},100);
          } else {
            this.comService.alertInfo(response.message);
          }
        })
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  clickFavourite(menuid: number) {
    //喜欢没有变红
    if (document.getElementById(menuid.toString()).className.indexOf("iconColorRed") == -1) {
      this.createFavourite(this.favourite, menuid);
    } else {
      this.crud.getByTwoId(this.comParam.getFavouriteMenuByUserIdMenuId, this.userid, menuid).subscribe((response: any) => {
        if (200 === response.code) {
          this.favourite = response.data;
          this.deleteFavourite(this.favourite.id, menuid);
        } else {
          this.comService.alertInfo(response.message);
        }
      })
    }
  }
  //1代表喜欢，0代表不喜欢
  createFavourite(favourite:Favourite,menuid:number){
    this.favourite.userid = this.userid;
    this.favourite.menuid = menuid;
    this.crud.saveForm(this.comParam.saveFavourite,favourite).subscribe((response: any) => {
      if(200===response.code){
        document.getElementById(menuid.toString()).className="ios hydrated iconColorRed";
      }else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  initialFavourite(userid:number){
    this.crud.getById(this.comParam.getFavouriteByUserId, userid).subscribe((response: any) => {
      if(200===response.code){
        this.favouriteList = response.data;
        for (const iterator of this.favouriteList) {
          if(0!=iterator.menuid){
            document.getElementById(iterator.menuid.toString()).className = "ios hydrated iconColorRed";
          }
        }
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavourite(id:number,menuid:number){
    this.crud.getById(this.comParam.deleteFavouriteById,id).subscribe((response: any) => {
      if(200===response.code){
        document.getElementById(menuid.toString()).className = "ios hydrated";
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  loginOff(){
    this.comService.userLoginOff();
  }

  getMenusByKeyWords(){
    console.log(this.menuname);
    if(this.menuname==undefined||this.menuname==""||this.menuname==null){
      this.menuListInfo.splice(0,this.menuListInfo.length);
      this.ngOnInit();
      this.ngAfterContentInit();
    }else{
      this.crud.getbyParam(this.comParam.getMenusByKeyWords,this.menuname).subscribe((response: any) => {
        if(200===response.code){
          this.menuListInfo.splice(0,this.menuListInfo.length);
          this.menuListInfo = response.data;
          this.ngAfterContentInit();
          console.log(this.menuListInfo);
        }else{
          this.comService.alertInfo(response.message);
        }
      })
    }

  }
}
