import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComParam } from './comParam';
import { Json } from './json';

@Injectable()
export class Crud {
  constructor(
    public http: HttpClient, 
    public comParam: ComParam, 
    public json: Json,
    ) {

     }

  getAllInfo(url: string) {
    return this.http.post<any>(url, this.comParam.httpOptions);
  }

  delById(url: string, itemvalue: number) {
    return this.http.delete(url + itemvalue);
  }

  saveForm(url: string, info: any) {
    return this.http.post(url, info, this.comParam.httpOptions);
  }

  saveFormWithJsonString(url: string, info: String) {
    console.log(url)
    return this.http.post(url, JSON.stringify(info), this.comParam.httpOptions);

  }

  // updateInfo(getAllInfoJson: JSON[], selectedItem: any) {
  //   var jsonObject = this.json.getJsonObjectFromObject(getAllInfoJson);
  //   for (var selectedInfo of jsonObject) {
  //     if (selectedItem === selectedInfo.id) {
  //       return selectedInfo;
  //     }
  //   }
  // }
  getby(url: string, name: JSON) {
    return this.http.post(url,name, this.comParam.httpOptions);
  }

  getbyParam(url: string, name: String) {
    return this.http.post(url,name, this.comParam.httpOptions);
  }

  getById(url: string, id:number) {
    return this.http.get(url+id, this.comParam.httpOptions);
  }
  getByTwoId(url: string, id1:number,id2:number) {
    return this.http.get(url+id1+'/'+id2, this.comParam.httpOptions);
  }

  updateInfo(url: string, info: any) {
    return this.http.post(url, info);
  }

}