import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from 'src/typeorm/UserSchema';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports:[TypeOrmModule.forFeature(
    [UserSchema]//cause of the repos thingy in service, each schema's repo should be listed in this array
  )],
  controllers: [UsersController],
  providers: [{
    provide:'USER_SERVICE',//must be unique
    useClass:UsersService,
  }]
})
export class UsersModule {}
