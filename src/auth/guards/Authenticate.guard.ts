import { Injectable } from "@nestjs/common";
import { CanActivate ,ExecutionContext} from "@nestjs/common/interfaces";
import { Request } from "express";


@Injectable()
export class AuthenticateGuard implements CanActivate{

  async canActivate(context: ExecutionContext): Promise<any>  {
      const req=context.switchToHttp().getRequest<Request>();
      return req.isAuthenticated();

  }
}