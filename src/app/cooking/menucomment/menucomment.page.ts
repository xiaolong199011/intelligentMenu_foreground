import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { MenuComment } from '../../models/MenuComment';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menucomment',
  templateUrl: './menucomment.page.html',
  styleUrls: ['./menucomment.page.scss'],
})
export class MenucommentPage implements OnInit {

  private menuId:number;
  private userId:number;
  currentDateTime:string;

  constructor(
    private routeinfo: ActivatedRoute,
    private menuComment:MenuComment,
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private router: Router,
  ) { 
    this.router.onSameUrlNavigation='reload';
  }

  ngOnInit() {
    this.menuId=this.routeinfo.snapshot.queryParams['menuid'];
    this.userId = Number(sessionStorage.getItem('userid'));
    this.currentDateTime = this.comParam.currentDateTime;
    this.menuComment={
      id:0,
      comment:'',
      menuId:this.menuId,
      userId:this.userId,
      timestamp:'',
      readOnly:'否',
      user:null,
    }
  }

  submitMenuComment(){
    this.menuComment.timestamp = this.currentDateTime;
    this.crud.saveForm(this.comParam.saveMenuComment,this.menuComment).subscribe((response: any)=>{
      if(200===response.code){
        this.router.navigate(['/user/menudetail'],{queryParams: {id: this.menuId}});
        this.comService.alertInfo(response.message);
      }else{
        this.comService.alertInfo(response.message);
        this.menuComment={
          id:0,
          comment:'',
          menuId:0,
          userId:this.userId,
          timestamp:'',
          readOnly:'否',
          user:null,
        };
      }
      console.log(response);
    });
  }
}
