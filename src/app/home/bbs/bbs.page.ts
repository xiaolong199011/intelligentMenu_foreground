import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bbs',
  templateUrl: './bbs.page.html',
  styleUrls: ['./bbs.page.scss'],
})
export class BBSPage implements OnInit {

  bbsTopicList:any;
  showPicUrl:string;


  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private routeinfo: ActivatedRoute,
  ) { 
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.getAllBBSTopic();
    this.showPicUrl=this.comParam.showFile;
  }

  getAllBBSTopic(){
    this.crud.getAllInfo(this.comParam.getAllBBSTopic).subscribe((response: any) => {
      if(200===response.code){
        this.bbsTopicList = response.data;
      }else{
        this.comService.alertInfo(response.msg);
      }
    })
  }

  loginOff(){
    this.comService.userLoginOff();
  }
}
