import { Component, OnInit } from '@angular/core';
import {ComService} from '../../common/ComService';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  constructor(
    private comService: ComService,
  ) { }

  ngOnInit() {
  }
  loginOff(){
    this.comService.userLoginOff();
  }
}
