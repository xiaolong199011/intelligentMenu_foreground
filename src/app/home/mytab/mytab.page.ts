import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import { Router } from '@angular/router';
import { Crud } from '../../common/crud';
import {ComParam} from '../../common/comParam';
import { User } from '../../models/User';
@Component({
  selector: 'app-mytab',
  templateUrl: './mytab.page.html',
  styleUrls: ['./mytab.page.scss'],
})
export class MytabPage implements OnInit {
  private tab:String="menu";
  private userid:number;
  private showPicUrl:string;
  constructor(
    private comService: ComService,
    private router: Router,
    private crud: Crud,
    private comParam: ComParam,
    private user:User,
  ) { }

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('userid'));
    this.getUser();
    this.showPicUrl=this.comParam.showFile;
  }
  loginOff(){
    this.comService.userLoginOff();
  }

  updateUser(){
    this.router.navigate(['/user/register'],{queryParams: {id: this.userid}});
  }

  getUser(){
    this.crud.getById(this.comParam.getUserInfoById,this.userid).subscribe((response: any) => {
      this.user = response;
      console.log(this.user);
    })
  }

  checkMyMenu(){
    this.crud.getById(this.comParam.getMenusByUserId,this.userid).subscribe((response: any) => {
      if(200===response.code){
        this.router.navigate(['/user/usermenu']);
      }else{
        this.comService.alertInfo("没有创建的菜谱，请创建后查看");
      }
    })
  }
}
