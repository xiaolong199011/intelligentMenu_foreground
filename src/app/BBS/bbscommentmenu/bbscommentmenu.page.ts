import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { BBSComment } from '../../models/BBSComment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bbscommentmenu',
  templateUrl: './bbscommentmenu.page.html',
  styleUrls: ['./bbscommentmenu.page.scss'],
})
export class BbscommentmenuPage implements OnInit {

  private topicid:number;

  constructor(

    private routeinfo:ActivatedRoute,
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private bbsComment:BBSComment,
    private router: Router,
  ) { }

  ngOnInit() {
    this.topicid=this.routeinfo.snapshot.queryParams['id'];
    this.bbsComment.topicid = this.topicid;
    this.bbsComment.userid =Number(sessionStorage.getItem('userid'));
    this.bbsComment.zan=0;
  }

  submitBBSComment(){
    this.bbsComment.timestamp =  this.comParam.currentDateTime;
    this.crud.saveForm(this.comParam.saveBBSComment,this.bbsComment).subscribe((response: any) => {
      if(200===response.code){
        this.router.navigate(['/user/bbsdetail'],{queryParams: {id: this.bbsComment.topicid}});
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

}
