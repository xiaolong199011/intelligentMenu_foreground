import { Component, OnInit } from '@angular/core';
import { ComService } from '../../common/ComService';
import { ComParam } from '../../common/comParam';
import { Crud } from '../../common/crud';
import { User } from '../../models/User';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.page.html',
  styleUrls: ['./usermanager.page.scss'],
})
export class UsermanagerPage implements OnInit {
  private userList: Array<User>;


  constructor(
    private comParam: ComParam,
    private comService: ComService,
    private crud: Crud,
    private user: User,
    private router: Router,
    private routeinfo: ActivatedRoute,
  ) {
    this.routeinfo.params.subscribe(val => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.getAllUser();
  }
  getAllUser() {
    this.crud.getAllInfo(this.comParam.getAllUser).subscribe((response: any) => {
      if (200 === response.code) {
        this.userList = response.data;
        console.log(this.userList);
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  delUser(id: number) {
    this.crud.getById(this.comParam.deleteUserById, id).subscribe((response: any) => {
      if (200 === response.code) {
        this.comService.alertInfo(response.message);
        this.delMenuCommentByUserId(id);
        this.ngOnInit();
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  delMenuCommentByUserId(id:number){
    this.crud.getById(this.comParam.deleteMenuCommentByUserId, id).subscribe((response: any) => {
      if (200 === response.code) {
      } else {
        this.comService.alertInfo(response.message);
      }
    })
  }

  refreshPage() {
    this.ngOnInit();
  }

  updateUser(id: number) {
    this.router.navigate(['/manager/updatemanager/updateusermanager'], { queryParams: { id: id } });
  }
}
