import {  Controller, Get, Post, Inject, Param ,Body,HttpException,HttpStatus, UseInterceptors,UsePipes, ClassSerializerInterceptor,ValidationPipe,UseFilters} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { UserSerialized } from 'src/users/types/User';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE')private readonly usersService:UsersService){}


    @Get()
    getUsers(){
        return this.usersService.fetchUsers();
    }
    
    @UseInterceptors(ClassSerializerInterceptor)//unless u use this, the serializition wont work
    @Get(':username')
    getUserByUsername(@Param('username')username:string){
     const user=this.usersService.fetchUserByName(username);
     if (user)  
     return new UserSerialized(user);
     else throw new HttpException('User not found',HttpStatus.BAD_REQUEST);

    }
    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
        @Get('/id/:id')
    getUserById(@Param('id',ParseIntPipe)id:number){
     const user=this.usersService.fetchUserById(id);
     if (user)  
     return new UserSerialized(user);
     else
     //throw new NotFoundException();
     throw new UserNotFoundException('couldnt find the user, u looking for',401);

    }


    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body()userData:CreateUserDto){
        return this.usersService.newUser(userData);
    }

} 
