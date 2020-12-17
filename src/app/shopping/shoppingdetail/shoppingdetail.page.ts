import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
 import { PaymodelComponent } from '../paymodel/paymodel.component';
//import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-shoppingdetail',
  templateUrl: './shoppingdetail.page.html',
  styleUrls: ['./shoppingdetail.page.scss'],
})
export class ShoppingdetailPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  async checkout(){
    const modal = await this.modalController.create({
      showBackdrop:true,
      component: PaymodelComponent,
      componentProps: {value: 123},
      // cssClass: 'my-custom-class'
    });
     await modal.present();
    //  const { data } = await modal.onDidDismiss();
    //  console.log(data);
  }

}
