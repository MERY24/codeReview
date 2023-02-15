import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("welcome to the validationCustomerAccount middleware!");
    const {valid}=req.headers;
    if(valid)
    next();
    else throw new HttpException('invalid account ',HttpStatus.UNAUTHORIZED)
  }
}
