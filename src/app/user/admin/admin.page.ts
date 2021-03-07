import { Component, OnInit } from '@angular/core';
import { Admin } from '../../models/Admin';
import { Crud } from '../../common/crud';
import { Router } from '@angular/router';
import {ComParam} from '../../common/comParam';
import { ComService } from '../../common/ComService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(
    private admin:Admin,
    private crud: Crud, 
    private router: Router,
    private comParam:ComParam,
    private comService:ComService,
  ) { }

  ngOnInit() {
  }
  login(){
    this.crud.saveForm(this.comParam.getAdminByAdmin,this.admin).subscribe((response: any) => {
      console.log(JSON.stringify(response));
      if(200 === response.code){
        sessionStorage.setItem('status','success');
        sessionStorage.setItem('userid','admin');
        this.router.navigate(['/manager/tabsmanager/cookingmanager']);
      }else{
        this.comService.alertInfo(response.message);
      }
    })
  }
}
