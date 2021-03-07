import { User } from './User';
export class MenuComment {
    id:number;
    comment:string;
    menuId:number;
    userId:number;
    readOnly:string;
    timestamp:string;
    user:User;
}
