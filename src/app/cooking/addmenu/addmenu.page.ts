import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.page.html',
  styleUrls: ['./addmenu.page.scss'],
})
export class AddmenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  upload() {
    var myForm = <HTMLFormElement>document.getElementById('picupload');
    myForm.submit();
  }
}
