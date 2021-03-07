import { Component, OnInit } from '@angular/core';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
import {ComParam} from '../../common/comParam';
import { ComService } from '../../common/ComService';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginUrl = this.comParam.getUserInfoByName;

  private userInfo:any={
    id:0,
    username:'',
    password:''
  };

  private userid:number;

  constructor(
    private crud: Crud, 
    private router: Router,
    private comParam:ComParam,
    private comService:ComService,
    ) { }

  ngOnInit() {
  }
  
  login(){
    
    this.crud.getby(this.loginUrl,this.userInfo).subscribe((response: any) => {
      if(200===response.code){
        this.userInfo = response.data;
        sessionStorage.setItem('status','success');
        sessionStorage.setItem('userid',this.userInfo.id);
        this.comService.alertInfo(response.message);
        this.router.navigate(['/user/tabs/cooking']);
      }else{
        // this.userInfo={};
        this.comService.alertInfo(response.message);
        
      }
    })
  }



}
