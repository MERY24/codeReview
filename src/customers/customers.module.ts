import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate-customer-account/validate-customer-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [ CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ValidateCustomerMiddleware,ValidateCustomerAccountMiddleware,(req: Request, res: Response, next: NextFunction)=>{
      console.log("works fine like wine");
      next();
    })// once the exe of the 1st mid the 2nd mid comes right after when next() get exe
    .exclude(
      {
        path:'customers',
        method:RequestMethod.POST
      }
    )
    .forRoutes(
      {
        path:'customers',
        method:RequestMethod.GET
      }
    )
  }
}
