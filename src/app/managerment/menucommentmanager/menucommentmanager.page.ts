import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import {MenuComment} from '../../models/MenuComment';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-menucommentmanager',
  templateUrl: './menucommentmanager.page.html',
  styleUrls: ['./menucommentmanager.page.scss'],
})
export class MenucommentmanagerPage implements OnInit {

   private menuCommentList:Array<MenuComment>;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private router:Router,
    private routeinfo: ActivatedRoute,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
   }

  ngOnInit() {
    this.getAllMenuComment();
  }

  getAllMenuComment(){
    this.crud.getAllInfo(this.comParam.getAllMenuComment).subscribe((response: any) => {
      if(200===response.code){
        this.menuCommentList = response.data;
      }
      })
  }

  updateMenuComment(id:number){
    this.router.navigate(['/manager/updatemanager/updatemenucommentmanager'],{queryParams: {id: id}});
  }

  refreshPage(){
    this.ngOnInit();
  }

  delMenuById(id:number){
    this.crud.getById(this.comParam.delMenuCommentById,id).subscribe((response: any) => {
      if(200===response.code){
        this.ngOnInit();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
