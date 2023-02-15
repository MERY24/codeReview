import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

constructor(private customersService:CustomersService){}

    @Get()
    getCustomers(){
      return this.customersService.fetchCustomers();
    }
    @Get(':id')
    getCustomer(@Param('id', ParseIntPipe)id:number){//i could've named it diff, it just extracts the params we specidfied in @Params, and put it inside the var we created
      return this.customersService.fetchCustomer(id);
    }

    @Post()
    @UsePipes(new ValidationPipe)//invoking a pipe otherwise class validators wont work
    createCustomer(@Body()CustomerData:CreateCustomerDto){//extracts the body of the rqst and ensures it follows the dto
     console.log(CustomerData);
      this.customersService.newCustomer(CustomerData)
    }
}
