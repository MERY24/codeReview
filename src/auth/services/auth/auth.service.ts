import { Injectable,Inject } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {

    //service DI
    constructor(@Inject('USER_SERVICE')private readonly userSevice: UsersService){//now call any mths u want from userService
 }
 
    async validateUser(username:string,password:string){
        const userFound= await this.userSevice.findUser(username);

       // if(userFound && userFound.password===password)
        if(userFound){

            const pswMatch=comparePassword(password, userFound.password);

            if(pswMatch){
                    console.log("welcome to auth service, psw matched",userFound);

                     return userFound;

            }else console.log("password did not match");    return null;

     }
        console.log("User wasnt found in db, auth failed");
    }
}
