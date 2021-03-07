import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../models/MenuInfo';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import {ActivatedRoute,Params} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecookingmanager',
  templateUrl: './updatecookingmanager.page.html',
  styleUrls: ['./updatecookingmanager.page.scss'],
})
export class UpdatecookingmanagerPage implements OnInit {

  private id:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private menuInfo:MenuInfo,
    private routeinfo: ActivatedRoute,
    private router:Router,
  ) {
    this.router.onSameUrlNavigation='reload';
  }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.getMenuInfo();
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

  updateMenu(){
    this.crud.updateInfo(this.comParam.updateMenu, this.menuInfo).subscribe((response: any) => {
      if (200 === response.code) {
        this.router.navigate(['/manager/tabsmanager/cookingmanager'],{replaceUrl:true});
      } else {
        this.comService.alertInfo(response.message);
      }
      
    })
  }

}
