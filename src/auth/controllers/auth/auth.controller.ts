import { Controller, Inject, Post,Req,Get,Session} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { Request } from 'express';
import { LocalAuthGuard } from 'src/auth/guards/LocalAuth.guard';
import { AuthenticateGuard } from 'src/auth/guards/Authenticate.guard';
//import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
   // constructor(@Inject('AUTH_SERVICE')private readonly authSevice: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    
     async login(@Req() req :Request){

     }


     @Get()
     async getAuthSession(@Session()session:Record<string,any>){// extracts the session objs from req
       console.log(session);
       console.log(session.id);
       session.authenticate=true;// as soon as we touch thesesson var, it intialize
       return session;
     }
    
     @UseGuards(AuthenticateGuard)
     @Get('status')
     async getAuthStatus(@Req()req:Request){
      return req.user;
     }

}
