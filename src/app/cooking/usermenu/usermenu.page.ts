import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import { Router } from '@angular/router';
import { Crud } from '../../common/crud';
import {ComParam} from '../../common/comParam';
import { User } from '../../models/User';
import { MenuInfo } from '../../models/MenuInfo';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.page.html',
  styleUrls: ['./usermenu.page.scss'],
})
export class UsermenuPage implements OnInit {
  private userid:number;
  private menuList:Array<MenuInfo>;
  private showPicUrl:string;

  constructor(
    private comService: ComService,
    private router: Router,
    private crud: Crud,
    private comParam: ComParam,
    private user:User,
    private menuInfo:MenuInfo,
  ) { }

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('userid'));
    this.showPicUrl=this.comParam.showFile;
    this.getUserMenu();
  }
  getUserMenu(){
    this.crud.getById(this.comParam.getMenusByUserId,this.userid).subscribe((response: any) => {
      if(200===response.code){
        this.menuList = response.data;
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
