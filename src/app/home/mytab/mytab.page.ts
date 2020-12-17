import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytab',
  templateUrl: './mytab.page.html',
  styleUrls: ['./mytab.page.scss'],
})
export class MytabPage implements OnInit {
  private tab:String="menu";

  constructor() { }

  ngOnInit() {
  }

}
