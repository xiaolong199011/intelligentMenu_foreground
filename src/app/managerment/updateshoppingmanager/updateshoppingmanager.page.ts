import { Component, OnInit } from '@angular/core';
import {ShopMenuInfo} from '../../models/ShopMenuInfo';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import {ActivatedRoute,Params} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateshoppingmanager',
  templateUrl: './updateshoppingmanager.page.html',
  styleUrls: ['./updateshoppingmanager.page.scss'],
})
export class UpdateshoppingmanagerPage implements OnInit {

  private id:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private shopMenuInfo:ShopMenuInfo,
    private routeinfo: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.getShopMenuInfo();
  }

  getShopMenuInfo(){
    this.crud.getById(this.comParam.getShopMenuById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.shopMenuInfo = response.data;
        console.log(JSON.stringify(this.shopMenuInfo));
      }else{
        this.comService.alertInfo(response.message);
      }
    });
  }

  updateShopMenu(){
    this.crud.updateInfo(this.comParam.updateShopMenu, this.shopMenuInfo).subscribe((response: any) => {
      if (200 === response.code) {
        this.router.navigate(['/manager/tabsmanager/shoppingmanager']);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

}
