import { Component, OnInit } from '@angular/core';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
import {ComParam} from '../../common/comParam';
import { ComService } from '../../common/ComService';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public  commonResult:[];
  public userid:number;

  protected checkDuplicateUserCode:number;

  constructor(
    private crud: Crud,
    private router: Router,
    private comParam: ComParam,
    private comService: ComService,
    private routeinfo:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userid=this.routeinfo.snapshot.queryParams['id'];
    if(undefined!=this.userid){
      this.crud.getById(this.comParam.getUserInfoById,this.userid).subscribe((response: any) => {
        this.userinfo = response;
      })
    }
  }

  private userinfo: any = {
    username: '',
    password: '',
    age: '',
    sexList: ['男', '女'],
    sex: '男',
    telephonenum: '',
    detail: '',
    vip: '否',
    fileid:'',
    timestamp:''
  }

  saveUser() {
    var save_user_url = this.comParam.saveUserInfo;
    this.userinfo.timestamp =  this.comParam.currentDateTime;

    if(undefined!=this.userid){
      this.crud.updateInfo(this.comParam.updateUser, this.userinfo).subscribe((response: any) => {
        if (200 === response.code) {
          this.router.navigate(['/user/tabs/mytab']);
        } else {
          this.comService.alertInfo(response.message);
        }
      })
    }else{
      this.crud.saveForm(save_user_url, this.userinfo).subscribe((response: any) => {
        if (200 === response.code) {
          sessionStorage.setItem('status', 'success');
          
          this.comService.alertInfo(response.message);
          this.router.navigate(['/user/login']);
        } else {
          this.comService.alertInfo(response.message);
          this.userinfo = {
            username: '',
            password: '',
            age: '',
            sexList: ['男', '女'],
            sex: '男',
            telephonenum: '',
            detail: '',
            fileid:0,
            timestamp:''
          };
        }
      }
      );
    }
  

  }

  uploadFile(){
    this.comService.uploadFile("file",this.comParam.uploadFile).subscribe((response: any) => {
      if(200===response.code){
        this.userinfo.fileid = response.data;
        this.comService.alertInfo(response.message);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
