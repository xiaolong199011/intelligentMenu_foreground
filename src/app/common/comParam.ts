import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
 import { DatePipe } from '@angular/common';
@Injectable()



export class ComParam {
    constructor(
        public datePipe: DatePipe
    ) {
        
     }

    public host = 'http://localhost:8002';
    public getUserInfoById = this.host+'/user/getbyid/';
    public getUserInfoByName = this.host+'/user/getbyusername';
    public saveUserInfo = this.host+'/user/save';
    public uploadFile = this.host+'/file/upload';
    public saveMenu = this.host+'/menu/createmenu';
    public getAllMenu = this.host+'/menu/getAllMenu';
    public showFile = this.host+'/file/showfile/';
    public updateMenu = this.host+'/menu/updateMenu';
    public getMenuById = this.host+'/menu/getMenuById/';
    public saveShopMenu = this.host+'/shopping/createShopMenu';
    public getAllShopMenu = this.host+'/shopping/getAllShopMenu';
    public getShopMenuById = this.host+'/shopping/getShopMenuById/';
    public updateShopMenu = this.host+'/shopping/updateShopMenu';
    public saveBBSTopic = this.host+'/bbsTopic/create';
    public getAllBBSTopic = this.host+'/bbsTopic/getAll';
    public getBBSTopicById = this.host + '/bbsTopic/getById/';
    public saveBBSComment = this.host+ '/bbsComment/create';
    public getBBSCommentsByTopicId = this.host + '/bbsComment/getByTopicId/';
    public getBBSCommentsById = this.host + '/bbsComment/getById/';
    public updateBBSComment = this.host + '/bbsComment/update';
    public saveFavourite = this.host+ '/favourite/create';
    public updateFavourite = this.host + '/favourite/update';
    public getFavouriteByUserId = this.host + '/favourite/getByUserId/';
    public getFavouriteMenuByUserIdMenuId = this.host + '/favourite/getByUserIdMenuid/';
    public getFavouriteShoppingByUserIdShoppingId = this.host + '/favourite/getByUserIdShoppingid/';
    public getFavouriteBBSCommentByUserIdCommentId = this.host + '/favourite/getByUserIdCommentId/';
    public deleteFavouriteById = this.host + '/favourite/deleteById/';
    public getAdminByAdmin = this.host + '/admin/getAdminByUserName/';
    public deleteMenuById = this.host + '/menu/deleteById/';
    public getFavouriteByMenuId = this.host + '/favourite/getByMenuId/';
    public deleteShopMenuById = this.host + '/shopping/deleteById/';
    public getFavouriteByShoppingId = this.host + '/favourite/getByShoppingId/';
    public getAllBBSComment =this.host + '/bbsComment/getAll';
    public deleteBBSTopicById =this.host +  '/bbsTopic/deleteById/';
    public deleteBBSCommentById =this.host +  '/bbsComment/deleteById/';
    public getFavouriteByCommentById = this.host + '/favourite/getByCommentId/';
    public updateBBSTopic = this.host +  '/bbsTopic/update/';
    public getAllFavourite = this.host + '/favourite/getAll/';
    public getFavouriteById = this.host + '/favourite/getById/';
    public getAllUser = this.host+'/user/getAll/';
    public deleteUserById = this.host+'/user/delById/';
    public updateUser = this.host+'/user/update/';
    public saveMenuComment = this.host+'/menuComment/create/';
    public getMenuCommentByMenuId = this.host+ '/menuComment/getByMenuId/';
    public getMenuCommentById = this.host+ '/menuComment/getById/';
    public updateMenuComment = this.host+ '/menuComment/update/';
    public getAllMenuComment = this.host+ '/menuComment/getAll/';
    public delMenuCommentById = this.host+ '/menuComment/deletion/';
    public getMenusByKeyWords =  this.host+ '/menu/getMenusByKeyWords/';
    public deleteMenuCommentByUserId = this.host+ '/menuComment/deletionByUserId/';
    public getShopMenuByType = this.host+'/shopping/getShopMenuByType/';
    public getMenusByUserId = this.host+'/menu/getMenusByUserId/';

    public currentDateTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')

    public httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8','Access-Control-Allow-Origin':'*' }) };

}