import { IsNotEmpty,IsNumber } from "class-validator";

export class CreateAdressDto{
    @IsNotEmpty()
    line1:string;

    line2?:string;

    @IsNotEmpty()
    @IsNumber()
    postalCode:number;

    @IsNotEmpty()
    city:string;

    @IsNotEmpty()
    country:string;
}