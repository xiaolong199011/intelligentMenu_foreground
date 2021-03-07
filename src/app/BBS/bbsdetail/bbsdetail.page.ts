import { Component, OnInit,ElementRef,Renderer2 } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { BBSTopic } from '../../models/BBSTopic';
import { BBSComment } from '../../models/BBSComment';
import { Favourite } from '../../models/Favourite';

@Component({
  selector: 'app-bbsdetail',
  templateUrl: './bbsdetail.page.html',
  styleUrls: ['./bbsdetail.page.scss'],
})
export class BbsdetailPage implements OnInit {

  private id:number;
  private picUrl:string;
  private BBSCommentsList:any;
  private userid:number;
  private favouriteList:Array<Favourite>;

  constructor(
    private routeinfo:ActivatedRoute,
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private bbsTopic:BBSTopic,
    private bbsComment:BBSComment,
    private favourite:Favourite,
    private el:ElementRef,
    private renderer2: Renderer2,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
      this.ngAfterContentInit();
    })
  }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.getBBSTopicById();
    this.picUrl = this.comParam.showFile;
    this.userid = Number(sessionStorage.getItem('userid'));
    this.favourite.commentid=0;
    this.favourite.menuid=0;
    this.favourite.shoppingid=0;
    this.favourite.topicid=0;

  }
  ngAfterContentInit(){
    setTimeout(() => {this.initialFavourite(this.userid);},300);
  }
  

  getBBSTopicById(){
    this.crud.getById(this.comParam.getBBSTopicById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.bbsTopic = response.data;
        this.getBBSCommentsByTopicId();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
  getBBSCommentsByTopicId(){
    this.crud.getById(this.comParam.getBBSCommentsByTopicId,this.bbsTopic.id).subscribe((response: any) => {
      if(200===response.code){
        this.BBSCommentsList = response.data;
      }else{

      }
    })
  }
  getBBSCommentById(id:number){
    this.crud.getById(this.comParam.getBBSCommentsById, id).subscribe((response: any) => {
      if(200===response.code){
        this.bbsComment = response.data;
        this.bbsComment.zan = this.bbsComment.zan+1;
        this.updateBBSComment(this.bbsComment);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
  updateBBSComment(bbsComment:BBSComment){
    this.crud.updateInfo(this.comParam.updateBBSComment, bbsComment).subscribe((response: any) => {
      if(200===response.code){
        this.getBBSCommentsByTopicId();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  clickFavourite(commentid: number) {
    //喜欢没有变红 document.getElementById('comment'+commentid.toString()).style.color!='red'
    if (document.getElementById('comment'+commentid.toString()).style.color!='red') {
      this.createFavourite(this.favourite, commentid);
    } else {
      this.crud.getByTwoId(this.comParam.getFavouriteBBSCommentByUserIdCommentId, this.userid, commentid).subscribe((response: any) => {
        if (200 === response.code) {
          this.favourite = response.data;
          this.deleteFavourite(this.favourite.id, commentid);
        } else {
          this.comService.alertInfo(response.message);
        }
      })
    }
  }

  createFavourite(favourite:Favourite,commentid:number){
    this.favourite.userid = this.userid;
    this.favourite.commentid = commentid;
    this.crud.saveForm(this.comParam.saveFavourite,favourite).subscribe((response: any) => {
      if(200===response.code){
        console.log(commentid);
         this.renderer2.setStyle(this.el.nativeElement.querySelector("#comment"+commentid.toString()),'color','red');
      }else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavourite(id:number,commentid:number){
    this.crud.getById(this.comParam.deleteFavouriteById,id).subscribe((response: any) => {
      if(200===response.code){
      
        this.renderer2.setStyle(this.el.nativeElement.querySelector("#comment"+commentid.toString()),'color','');
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  initialFavourite(userid:number){

    this.crud.getById(this.comParam.getFavouriteByUserId, userid).subscribe((response: any) => {
      if(200===response.code){
        this.favouriteList = response.data;
        console.log(JSON.stringify(this.favouriteList));
        for (const iterator of this.favouriteList) {
          if(0!=iterator.commentid){
            console.log(iterator.commentid);
            this.renderer2.setStyle(this.el.nativeElement.querySelector('#comment'+iterator.commentid.toString()),'color','red');
          }
        }
      }else{
        this.comService.alertInfo(response.message);
      }
    })
   }

   clickZan(id) {
    this.crud.getById(this.comParam.getBBSCommentsById, id).subscribe((response: any) => {
      if (200 === response.code) {
        this.bbsComment = response.data;
        this.bbsComment.zan = this.bbsComment.zan + 1;
        this.crud.updateInfo(this.comParam.updateBBSComment, this.bbsComment).subscribe((response: any) => {
          if (200 === response.code) {
            this.getBBSCommentsByTopicId();
            setTimeout(() => {this.initialFavourite(this.userid);},1000);
          } else {
            this.comService.alertInfo(response.message);
          }
        })
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }
}
