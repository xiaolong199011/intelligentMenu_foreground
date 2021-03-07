import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComParam } from './comParam';
import { Json } from './json';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable()
export class ComService {

    constructor(
        public http: HttpClient,
        public comParam: ComParam,
        public json: Json,
        public toastController: ToastController,
        private router: Router,
    ) {

    }

    uploadFile(fileId: string, uploadFIleUrl: string) {
        let uploadfile = <HTMLInputElement>document.getElementById(fileId);
        var formData = new FormData();
        formData.append('file', uploadfile.files[0]);
        console.log(uploadfile.files[0]);
        return this.http.post(uploadFIleUrl, formData);

    }

    async alertInfo(info: string) {
        const toast = await this.toastController.create({
            message: info,
            duration: 2000
        });
        toast.present();
    }
    userLoginOff(){
        sessionStorage.clear();
        this.router.navigate(['/user/login/']);
    }
}
