import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Favourite } from '../../models/Favourite';
import { BBSTopic } from '../../models/BBSTopic';
import { BBSComment } from '../../models/BBSComment';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bbsmanager',
  templateUrl: './bbsmanager.page.html',
  styleUrls: ['./bbsmanager.page.scss'],
})
export class BbsmanagerPage implements OnInit {

  private bbsTopicList:Array<BBSTopic>;
  private bbsCommentList:Array<BBSComment>;
  private tab:string;
  private bbsCommentFavouriteList:Array<Favourite>;
  private topicItemValue:number;
  private commentItemValue:number;
  //private itemvalue:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud, 
    private bbsTopic:BBSTopic,
    private bbsComment:BBSComment,
    private router:Router,
    private routeinfo: ActivatedRoute,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.tab='bbsTopic';
    this.getAllBBSTopic();
    this.getAllBBSComment();
    this.topicItemValue=0;
    this.commentItemValue=0;
  }

  getAllBBSTopic(){
    this.delCommentByTopicId
    this.crud.getAllInfo(this.comParam.getAllBBSTopic).subscribe((response: any) => {
      if(200===response.code){
        this.bbsTopicList = response.data;
        // console.log(JSON.stringify(this.bbsTopicList));
      }else{
        this.comService.alertInfo(response.msg);
      }
    })
  }
  getAllBBSComment(){
    this.crud.getAllInfo(this.comParam.getAllBBSComment).subscribe((response: any) => {
      if(200===response.code){
        this.bbsCommentList = response.data;
        console.log(JSON.stringify(this.bbsCommentList));
      }else{
        this.comService.alertInfo(response.msg);
      }
    })
  }

  delBBSTopicById(id:number){
    this.delCommentByTopicId(id);
    this.crud.getById(this.comParam.deleteBBSTopicById,id).subscribe((response: any) => {
      if(200===response.code){
        this.ngOnInit();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  delBBSCommentById(id:number){
    this.getFavouriteList(id);
    this.crud.getById(this.comParam.deleteBBSCommentById,id).subscribe((response: any) => {
      if(200===response.code){
        this.ngOnInit();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavouriteById(id:number){
    this.crud.getById(this.comParam.deleteFavouriteById,id).subscribe((response: any) => {
      if(200===response.code){
        this.comService.alertInfo(response.message);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  getFavouriteList(commentid:number){
    this.crud.getById(this.comParam.getFavouriteByCommentById, commentid).subscribe((response: any) => {
      if (200 === response.code) {
        this.bbsCommentFavouriteList = response.data;
        if( this.bbsCommentFavouriteList.length!=0){
          for (const iterator of this.bbsCommentFavouriteList) {
            this.deleteFavouriteById(iterator.id);
          }
        }
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  delCommentByTopicId(topicid:number){
    this.crud.getById(this.comParam.getBBSCommentsByTopicId, topicid).subscribe((response: any) => {
      if(200===response.code){
        this.bbsCommentList = response.data;
          if(0!==this.bbsCommentList.length){
            for (const iterator of this.bbsCommentList) {
                  this.delBBSCommentById(iterator.id);
            }
          }
      }
    })
  }

  delItem(itemvalue: number) {
    if (this.tab === 'bbsTopic') {
      this.delBBSTopicById(itemvalue);
    } else if (this.tab === 'bbsComment') {
      this.delBBSCommentById(itemvalue);
    }
  }
  updateItem(itemvalue: number) {
    if (this.tab === 'bbsTopic') {
      this.router.navigate(['/manager/updatemanager/updatebbstopicmanager'],{queryParams: {id: itemvalue},replaceUrl: true});
    } else if (this.tab === 'bbsComment') {
      this.router.navigate(['/manager/updatemanager/updatebbscommentmanager'],{queryParams: {id: itemvalue}});
    }
  }
  refreshPage(){
    this.ngOnInit();
  }
}
