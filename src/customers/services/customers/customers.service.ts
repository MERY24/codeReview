import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
    users=[
        {
            id:1,
            email:"jason@gmail.com",
            name:"jason"
        },
        {
            id:2,
            email:"marieAntoinette@gmail.com",
            name:"marieAntoinette"
        },
        {
            id:3,
            email:"joey@gmail.com",
            name:"joey"
        }
    ]


    fetchCustomers(){
        return this.users;
    }

    fetchCustomer(id:number){
        const customer=this.users.find((user)=>user.id == id);
        if(customer)
        return customer;
        else throw new HttpException('customer not found',HttpStatus.BAD_REQUEST)
    }

    newCustomer(customerData:CreateCustomerDto){
        this.users.push(customerData);
        console.log("customer created !");
    }
}
