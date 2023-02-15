import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import entitiesSchema from './typeorm/entitiesIndex';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import  {PassportModule} from '@nestjs/passport/dist'


@Module({
  imports: [CustomersModule, UsersModule,TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'42mer44yas88?02!01',
    database:'tut_db',
    entities:entitiesSchema,
    synchronize:true
  }), AuthModule,PassportModule.register({session:true})],
  controllers: [],
  providers: [],
})
export class AppModule {}
