import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import {MenuComment} from '../../models/MenuComment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatemenucommentmanager',
  templateUrl: './updatemenucommentmanager.page.html',
  styleUrls: ['./updatemenucommentmanager.page.scss'],
})
export class UpdatemenucommentmanagerPage implements OnInit {

  private id:number;

  constructor(
    private routeinfo:ActivatedRoute,
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud,
    private menuComment:MenuComment,
    private router:Router,
  ) {}

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.getMenuCommentById();
  }

  updateMenuComment(){
    this.crud.updateInfo(this.comParam.updateMenuComment, this.menuComment).subscribe((response: any) => {
      if (200 === response.code) {
        this.router.navigate(['/manager/tabsmanager/menucommentmanager'],{replaceUrl: true});
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  getMenuCommentById(){
    this.crud.getById(this.comParam.getMenuCommentById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.menuComment = response.data;
        console.log(this.menuComment);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
