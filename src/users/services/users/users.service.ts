import { Injectable } from '@nestjs/common';
import { User, UserSerialized } from 'src/users/types/User';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSchema } from 'src/typeorm/UserSchema';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserSchema) private readonly userRepository:Repository<UserSchema>){
//in nest we use repos to say that is a table, frome now on if want to instanciate a user,
//just use userRepository
    }

    private users:User[]=[
       {
        id:1,
        username:"henderson",
        password:"okeylessgo"
       },
       {
        id:2,
        username:"tomlin",
        password:"sheeeesh"
       },
       {
        id:3,
        username:"joestar",
        password:"diooooo"
       },
    ];

    fetchUsers(){

    return this.users.map(user=>plainToClass(UserSerialized,user));// transformes each user to a serialized user 
    }

    fetchUserByName(userName:string){
   //plainToClass(UserSerialized,user);//we match user to user serialized class(excluding psw), we can eiter do it in here or in cntrl
        return this.users.find((user)=>user.username===userName);
    }

    fetchUserById(id:number){
             return this.users.find((user)=>user.id===id);
    }

    //database

    newUser(userData:CreateUserDto){
       const password=encodePassword( userData.password)
       console.log("psw hashed",password);
      const userCreated=this.userRepository.create({...userData,password})//should def do validation, such as if it exists or somthing, mail... 

      return this.userRepository.save(userCreated);
    }

    async findUser(username:string){
        const user= await this.userRepository.findOneBy({username})
        console.log("it worked",user);//user is a userSchema type
       // const userPromiseResolved=plainToClass(UserSchema,user)
        return user ;
    }

    async findUserById(id:number){
        const user= await this.userRepository.findOneBy({id})
        console.log("it worked",user);//user is a userSchema type
       // const userPromiseResolved=plainToClass(UserSchema,user)
        return user ;
    }



}
