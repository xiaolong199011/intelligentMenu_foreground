import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../models/MenuInfo';
import {Material} from '../../models/Material';
import { HttpClient } from '@angular/common/http';
import { Json } from 'src/app/common/json';
import {CommonResult} from '../../common/CommonResult';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private response:CommonResult;
  private userid:number;
  private allMaterialList:Array<Material>;
  private materialList:Array<Material>;
  
  private menuInfo: MenuInfo = {
    id: 0,
    userid: 0,
    user:null,
    menuname:'',
    material: '',
    cookingdesc: '',
    sugerquantity: 0,
    fileid: 0,
    zan:0,
  }
  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private http: HttpClient,
    private json: Json,
    private crud: Crud, 
    private router: Router,
    private material:Material,
  ) {
    this.allMaterialList=[
      {name:"大白菜",sugarQuantity:9,amount:0},
      {name:"大萝卜",sugarQuantity:8,amount:0},
      {name:"西红柿",sugarQuantity:7,amount:0},
      {name:"猪肉",sugarQuantity:9,amount:0},
      {name:"牛肉",sugarQuantity:8,amount:0},
      {name:"鸡肉",sugarQuantity:7,amount:0},
      {name:"豆腐",sugarQuantity:9,amount:0},
      {name:"鸡蛋",sugarQuantity:8,amount:0},
      {name:"奶油",sugarQuantity:7,amount:0}
    ];
    this.materialList = new Array();
    // this.meatMaterialList=[
    //   {name:"猪肉",sugarQuantity:9,amount:0},
    //   {name:"牛肉",sugarQuantity:8,amount:0},
    //   {name:"鸡肉",sugarQuantity:7,amount:0}
    // ];
    // this.otherMaterialList=[
    //   {name:"豆腐",sugarQuantity:9,amount:0},
    //   {name:"鸡蛋",sugarQuantity:8,amount:0},
    //   {name:"奶油",sugarQuantity:7,amount:0}
    // ];

    //this.material.sugarQuantity=
  }

  ngOnInit() {
    this.userid = Number(sessionStorage.getItem('userid'));
    this.menuInfo.userid = this.userid;
    this.materialList = new Array();
  }

  ngAfterContentChecked(){
    
    this.menuInfo.sugerquantity=0;
    this.menuInfo.material="";
    for (const iterator of this.materialList) {
      this.menuInfo.sugerquantity=this.menuInfo.sugerquantity+iterator.sugarQuantity*iterator.amount;
      this.menuInfo.material = this.menuInfo.material+iterator.name+",";
    }
  }

  uploadFile(){
    this.comService.uploadFile("file",this.comParam.uploadFile).subscribe((response: any) => {
      this.response = response;
      console.log(this.response);
      this.menuInfo.fileid = this.response.data;
      console.log(this.menuInfo);
      this.comService.alertInfo(this.response.message);
    })
  }
  submitMenu(){
     if(this.menuInfo.fileid===0){
      this.comService.alertInfo("图片不能为空，请上传图片");
     }else{
      this.crud.saveForm(this.comParam.saveMenu,this.menuInfo).subscribe((response: any)=>{
        if(200===response.code){
          this.router.navigate(['/user/tabs/cooking']);
          this.comService.alertInfo(response.message);
        }else{
          this.comService.alertInfo(response.message);
          this.menuInfo=null;
        }
        console.log(response);
      });
     }
  }

  reset(){
    this.menuInfo=null;
  }
}
