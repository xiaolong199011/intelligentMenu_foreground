import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import {ActivatedRoute,Params} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateusermanager',
  templateUrl: './updateusermanager.page.html',
  styleUrls: ['./updateusermanager.page.scss'],
})
export class UpdateusermanagerPage implements OnInit {

  private id:number;
  private itemvalue:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private user:User,
    private routeinfo: ActivatedRoute,
    private router:Router,
  ) {
    this.router.onSameUrlNavigation='reload';
  }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    console.log(this.id);
    
    this.getUserById();
    this.user;

  }

  getUserById(){
    this.crud.getById(this.comParam.getUserInfoById,this.id).subscribe((response: any) => {
      this.user = response;
      this.user.sexList=['男','女'];
      this.user.vipList=['是','否'];
    });
  }

  updateUser(){
    this.crud.updateInfo(this.comParam.updateUser, this.user).subscribe((response: any) => {
      if (200 === response.code) {
        this.router.navigate(['/manager/tabsmanager/usermanager'],{queryParams: {id: this.id},replaceUrl: true});
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

}
