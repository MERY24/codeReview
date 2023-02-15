import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";


export class CreateUserDto{
  @IsNotEmpty()  
  @MinLength(3)
  username:string;

  @IsNotEmpty() 
  @IsEmail() 
  email:string;

  @IsNotEmpty() 
  @MinLength(8) 
//   @IsStrongPassword()
  password:string;
}