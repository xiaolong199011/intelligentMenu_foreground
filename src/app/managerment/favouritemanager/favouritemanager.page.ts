import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Favourite } from '../../models/Favourite';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-favouritemanager',
  templateUrl: './favouritemanager.page.html',
  styleUrls: ['./favouritemanager.page.scss'],
})
export class FavouritemanagerPage implements OnInit {

  private favouriteList:Array<Favourite>;
  private itemvalue:number;

  constructor(
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud,
    private favourite:Favourite,
    private router: Router,
    private routeinfo: ActivatedRoute,
  ) { 
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
   }

  ngOnInit() {
    this.getAllFavourite();
  }

  getAllFavourite(){
    this.crud.getAllInfo(this.comParam.getAllFavourite).subscribe((response: any) => {
      if(200===response.code){
        this.favouriteList = response.data;
        console.log(this.favouriteList);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }

  deleteFavouriteById(id:number){
    this.crud.getById(this.comParam.deleteFavouriteById,id).subscribe((response: any) => {
      if(200===response.code){
        this.comService.alertInfo(response.message);
        this.ngOnInit();
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
  updateFavourite(itemvalue:number){
    this.router.navigate(['/manager/updatemanager/updatefavouritemanager'],{queryParams: {id: itemvalue},replaceUrl: true});
  }
  refreshPage(){
    this.ngOnInit();
  }
}
