import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { BBSComment } from '../../models/BBSComment';
import { Router } from '@angular/router';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-updatebbscommentmanager',
  templateUrl: './updatebbscommentmanager.page.html',
  styleUrls: ['./updatebbscommentmanager.page.scss'],
})
export class UpdatebbscommentmanagerPage implements OnInit {

  private id:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private router: Router,
    private bbsComment:BBSComment,
    private routeinfo:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.geBBSCommentByid();
  }

  geBBSCommentByid(){
    this.crud.getById(this.comParam.getBBSCommentsById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.bbsComment = response.data;
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  updateBBSComment(){
    this.crud.updateInfo(this.comParam.updateBBSComment, this.bbsComment).subscribe((response: any) => {
      if (200 === response.code) {
        //,{replaceUrl: true}
        this.router.navigate(['/manager/tabsmanager/bbsmanager']);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

}
