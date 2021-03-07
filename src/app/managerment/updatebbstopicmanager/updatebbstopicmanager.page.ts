import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { BBSTopic } from '../../models/BBSTopic';
import { Router } from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-updatebbstopicmanager',
  templateUrl: './updatebbstopicmanager.page.html',
  styleUrls: ['./updatebbstopicmanager.page.scss'],
})
export class UpdatebbstopicmanagerPage implements OnInit {

  private id:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private router: Router,
    private bbsTopic:BBSTopic,
    private routeinfo:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.getBBSTopicByid();
  }

  getBBSTopicByid(){
    this.crud.getById(this.comParam.getBBSTopicById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.bbsTopic = response.data;
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  updateBBSTopic(){
    this.crud.updateInfo(this.comParam.updateBBSTopic, this.bbsTopic).subscribe((response: any) => {
      if (200 === response.code) {
        //,{replaceUrl: true}
        this.router.navigate(['/manager/tabsmanager/bbsmanager']);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  uploadFile(){
    this.comService.uploadFile("file",this.comParam.uploadFile).subscribe((response: any) => {
      if(200===response.code){
        this.bbsTopic.fileid = response.data;
        this.comService.alertInfo(response.message);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
