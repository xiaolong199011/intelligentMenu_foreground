import { User } from '../models/User';
export class BBSComment {
    id:number;
    userid:number;
    comment:string;
    zan:number;
    timestamp:string;
    topicid:number;
    user:User;
}