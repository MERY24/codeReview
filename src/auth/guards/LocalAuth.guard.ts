import { Injectable } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common/interfaces';
import {AuthGuard} from '@nestjs/passport/dist/auth.guard'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
async canActivate(context:ExecutionContext){
    const result=(await super.canActivate(context))as boolean;
    const req=context.switchToHttp().getRequest();
    await super.logIn(req);//invoks passport and logs in
    console.log(result);
    return result;
   }
}