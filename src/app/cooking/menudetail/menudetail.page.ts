import { Component, OnInit,ElementRef,Renderer2 } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { MenuInfo } from '../../models/MenuInfo';
import {CommonResult} from '../../common/CommonResult';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Favourite } from '../../models/Favourite';
import { Router } from '@angular/router';
import { MenuComment } from '../../models/MenuComment';
import { User } from '../../models/User';
@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {

  private id:number;
  private comResult:CommonResult;
  private picUrl:string;
  private userid:number;
  private favouriteList:Array<Favourite>;
  private menuCommentList:Array<MenuComment>;
  
  // private slideOpts={
  //   effect:'flip',//轮播效果
  //   autoplay:{
  //     delay:2000,//轮播时间2秒
  //   },
  //   loop:true//循环
  // }

  constructor(
    private routeinfo: ActivatedRoute,
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private menuInfo: MenuInfo,
    private favourite: Favourite,
    private el:ElementRef,
    private renderer2: Renderer2,
    private router:Router,
    private user:User,
    private menuComment:MenuComment
  ) {
    this.router.onSameUrlNavigation='reload';
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.picUrl = this.comParam.showFile;
    this.userid = Number(sessionStorage.getItem('userid'));
    this.favourite.commentid=0;
    this.favourite.menuid=0;
    this.favourite.shoppingid=0;
    this.favourite.topicid=0;
    this.getMenuInfo();
    this.getMenuCommentListByMenuId();
   
  }

  ngAfterContentInit(){
    //this.initialFavourite(this.userid,this.id);
    setTimeout(() => {this.initialFavourite(this.userid,this.id);},500)
    setTimeout(() => {this.initialReadOnly();},500)
    setTimeout(() => {this.initialAddButton();},500)
  }

  getMenuInfo(){
    this.crud.getById(this.comParam.getMenuById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.menuInfo = response.data;
      }else{
        this.comService.alertInfo(response.message);
      }
    });
   
  }
  clickZan(){
    this.menuInfo.zan = this.menuInfo.zan+1;
    this.crud.updateInfo(this.comParam.updateMenu,this.menuInfo).subscribe((response: any) => {
      if(200===response.code){
        this.initialFavourite(this.userid,this.id);
      }else{
        this.comService.alertInfo(response.message);
      }  
    })
  }

  clickFavourite(menuid: number) {
    //喜欢没有变红 
    if ( document.getElementById('menu'+menuid.toString()).style.color!='red') {
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

  createFavourite(favourite:Favourite,menuid:number){
    this.favourite.userid = this.userid;
    this.favourite.menuid = menuid;
    this.crud.saveForm(this.comParam.saveFavourite,favourite).subscribe((response: any) => {
      if(200===response.code){
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#menu'+menuid.toString()),'color','red');
      }else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavourite(id:number,menuid:number){
    this.crud.getById(this.comParam.deleteFavouriteById,id).subscribe((response: any) => {
      if(200===response.code){
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#menu'+menuid.toString()),'color','');
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  initialFavourite(userid:number,menuid:number){
    this.crud.getByTwoId(this.comParam.getFavouriteMenuByUserIdMenuId, userid, menuid).subscribe((response: any) => {
      if (200 === response.code) {
        this.favourite = response.data;
        this.renderer2.setStyle(this.el.nativeElement.querySelector('#menu'+this.favourite.menuid),'color','red');
      } 
    })
  }
  addMenuComment(){
    this.router.navigate(['/user/menucomment'],{queryParams: {menuid: this.id}});
  }

  getMenuCommentListByMenuId(){
    this.menuCommentList=null;
    this.crud.getById(this.comParam.getMenuCommentByMenuId,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.menuCommentList = response.data;
      }else{
        this.comService.alertInfo(response.message);
      }
    });
  }
  readOnly(id:number){
    this.getMenuCommentById(id); 
  }
  initialReadOnly(){
    this.crud.getById(this.comParam.getUserInfoById,this.userid).subscribe((response: any) => {
      this.user=response;
      if(this.user.vip==="是"){
        for (const iterator of this.menuCommentList) {
          this.renderer2.setStyle(this.el.nativeElement.querySelector('#readonly'+iterator.id),'visibility','visible');
          if(iterator.readOnly==="是"){
            this.renderer2.setStyle(this.el.nativeElement.querySelector('#readonlybuttons'+iterator.id),'color','gray');
        }
        }
      }
    })
  }
initialAddButton(){
  for (const iterator of this.menuCommentList) {
    if(iterator.readOnly==="是"&&iterator.userId===this.userid){
      this.renderer2.setStyle(this.el.nativeElement.querySelector('#addbutton'),'visibility','hidden');
    }
  }

}
  getMenuCommentById(id:number){
    this.crud.getById(this.comParam.getMenuCommentById,id).subscribe((response: any) => {
      if(200===response.code){
        this.menuComment=response.data;
        
        if(this.el.nativeElement.querySelector('#readonlybuttons'+id).style.color=='gray'){
          this.menuComment.readOnly="否";
          this.renderer2.setStyle(this.el.nativeElement.querySelector('#readonlybuttons'+id),'color','');
        }else{
          this.menuComment.readOnly="是";
          this.renderer2.setStyle(this.el.nativeElement.querySelector('#readonlybuttons'+id),'color','gray');
        }
        this.updateMenuComment(this.menuComment);
        
      }
    })
  }

  updateMenuComment(menuComment:MenuComment){
    this.crud.updateInfo(this.comParam.updateMenuComment,menuComment).subscribe((response: any) => {
      if(200===response.code){
        
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
