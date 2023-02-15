import { ArgumentsHost, ExceptionFilter,HttpException,Catch } from "@nestjs/common";
import { Request, Response } from "express";


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception:HttpException,host:ArgumentsHost){//argshost can give u access to multiple propreties such as req res
       console.log(exception.getResponse());
       console.log(exception.getStatus());
       const context =host.switchToHttp();
       const req=context.getRequest<Request>();
       const res=context.getResponse<Response>();
      // res.sendSatus(exception.getStatus());
      res.send(
        {
        msg:exception.getResponse(),
        status:exception.getStatus(),
        }
      )
    }
}