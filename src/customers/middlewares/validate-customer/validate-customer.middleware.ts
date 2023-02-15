import { Injectable, NestMiddleware,HttpException,HttpStatus } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("the validationCustomer middleware welcomes you!");
    const {authorization}=req.headers;
    if(!authorization)
    return res.status(400).send({messageError:"No authorization token found"});
    if(authorization==="gibberish")
    next();
    else throw new HttpException('Invalid authorization token provided',HttpStatus.FORBIDDEN);
  }
}
