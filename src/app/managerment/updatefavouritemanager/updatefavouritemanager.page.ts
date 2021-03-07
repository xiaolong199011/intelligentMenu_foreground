import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {ComService} from '../../common/ComService';
import {ComParam} from '../../common/comParam';
import { Crud } from '../../common/crud';
import { Favourite } from '../../models/Favourite';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatefavouritemanager',
  templateUrl: './updatefavouritemanager.page.html',
  styleUrls: ['./updatefavouritemanager.page.scss'],
})
export class UpdatefavouritemanagerPage implements OnInit {

  private id:number;

  constructor(
    private routeinfo:ActivatedRoute,
    private comParam:ComParam,
    private comService: ComService,
    private crud: Crud,
    private favourite:Favourite,
    private router: Router,
  ) { }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    this.getFavouriteById();
  }

  getFavouriteById(){
    this.crud.getById(this.comParam.getFavouriteById,this.id).subscribe((response: any) => {
      if(200===response.code){
        this.favourite = response.data;
        console.log(this.favourite);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
  updateFavourite(){
    this.crud.updateInfo(this.comParam.updateFavourite, this.favourite).subscribe((response: any) => {
      if (200 === response.code) {
        this.router.navigate(['/manager/tabsmanager/favouritemanager'],{replaceUrl: true});
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

}
