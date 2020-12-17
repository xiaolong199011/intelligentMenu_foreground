import { Component, OnInit } from '@angular/core';
import {NavParams} from "@ionic/angular";
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-paymodel',
  templateUrl: './paymodel.component.html',
  styleUrls: ['./paymodel.component.scss'],
})
export class PaymodelComponent implements OnInit {

  constructor(private navParams:NavParams,private toastController:ToastController) { 
    console.log(navParams.data.value);
  }

  ngOnInit() {}

  closePayModel(){
    this.navParams.data.modal.dismiss();
  }

  async payFor(){
    const toast = await this.toastController.create({
      message: '支付成功.',
      duration: 2000
    });
    toast.present();
}}
