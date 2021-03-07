import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
import {ShopMenuInfo} from '../../models/ShopMenuInfo';

@Component({
  selector: 'app-shoppingmenu',
  templateUrl: './shoppingmenu.page.html',
  styleUrls: ['./shoppingmenu.page.scss'],
})
export class ShoppingmenuPage implements OnInit {

  private shopMenuInfo: ShopMenuInfo = {
    id:0,
    materialname:'',
    sugerquantity:0,
    materialdescription:'',
    materialprice:0,
    materialreserve:0,
    zan:0,
    fileid:0,
    type:"食材",
    typeList:['食材','厨具'],
  }

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private router: Router,
    
  ) { }


  ngOnInit() {
  }

  uploadFile(){
    this.comService.uploadFile("file",this.comParam.uploadFile).subscribe((response: any) => {
      if(200===response.code){
        this.shopMenuInfo.fileid = response.data;
        this.comService.alertInfo(response.message);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
  submitShopMenu(){
    if(this.shopMenuInfo.fileid===0){
      this.comService.alertInfo("图片不能为空，请上传图片");
     }else{
      this.crud.saveForm(this.comParam.saveShopMenu,this.shopMenuInfo).subscribe((response: any) => {
        if(200===response.code){
          this.router.navigate(['/user/shoppinglist']);
          
          this.comService.alertInfo(response.message);
        }else{
          this.comService.alertInfo(response.message);
        }
       
      })
     }

  }
}
