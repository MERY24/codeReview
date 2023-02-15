/*The DTO on its own is more of a guideline for the developer and those who consume the API to know 
what kind of shape the request body expects to be, it doesn’t actually run any validations on its own.*/

import { Type } from "class-transformer";
import { IsNotEmpty,IsEmail, IsNumberString, IsString,ValidateNested,IsNotEmptyObject } from "class-validator";
import { CreateAdressDto } from "./CreateAdress.dto";


export class CreateCustomerDto{// a dto could possibly not look the same as the schema model
    @IsNotEmpty()
    @IsNumberString()
    id:number;

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ValidateNested()   //valiadte nested objs 
    @Type(()=>CreateAdressDto)// specifies the type of objs, these two are important, to access the validation of the preperties of our nested objs
    @IsNotEmptyObject()
    adress:CreateAdressDto;    

}