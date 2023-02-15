import {Exclude} from 'class-transformer';
import { UserSchema } from 'src/typeorm/UserSchema';
export interface User{
    id:number;
    username:string;
    password:string;
}

/*
export type AwaitedObject<UserSchema>= Awaited <UserSchema>
export class UserPromiseResolved{

     magicTransform(userPromise:Promise <UserSchema>){
return 
     }
}
*/

export class UserSerialized{
  
    username:string;

    @Exclude()
    password:string;  
    constructor(partial: Partial<UserSerialized>) {
        Object.assign(this, partial);}
}