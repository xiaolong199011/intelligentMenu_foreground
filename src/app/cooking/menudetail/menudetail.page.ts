import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {

  private slideOpts={
    effect:'flip',//轮播效果
    autoplay:{
      delay:2000,//轮播时间2秒
    },
    loop:true//循环
  }

  constructor() { }

  ngOnInit() {
  }

}
