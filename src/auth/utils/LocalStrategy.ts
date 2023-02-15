import { Injectable,Inject, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
constructor(@Inject('AUTH_SERVICE') private readonly authService:AuthService){
    super(
        { //doesnt work with me cause i used findbyone  in userservice, & generates an err saying user not found  in db
           // usernameField:'email',//looks in the body for email and assigns it to the username field (dig inside the strategy above)
        }
    )
}

   async validate(username:string,psw:string){
     const user= await this.authService.validateUser(username,psw);
     console.log("hell welcomes u", username,psw);
      if(!user)
      throw new UnauthorizedException('stuck in local strategy');
     return user;
   }
}