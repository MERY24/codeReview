import { Inject} from '@nestjs/common'
import{ PassportSerializer } from '@nestjs/passport'
import { UsersService } from 'src/users/services/users/users.service'
import { UserSchema } from 'src/typeorm/UserSchema'

export class SessionSerializer extends PassportSerializer{

    constructor(@Inject('USER_SERVICE') private readonly usersService:UsersService){
        super()
    }

    serializeUser(user: UserSchema, done:(err, user:UserSchema)=>void){
        console.log("serializeUser");
        done(null,user);// we serialize the session &everthing to db, we can serialize a part of user such a user.id, careful, deserialize expects the id 
    }

    //unpacks everything to check whose authenticated
    async deserializeUser(user: UserSchema, done:(err, user:UserSchema)=>void){
        //now we have to look for it
        console.log("deserializeUser");
        const userDb= await this.usersService.findUserById(user.id); 
        return userDb ? done(null,userDb):done('usernot found',null);
    }
 

}