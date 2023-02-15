import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from 'src/typeorm/UserSchema';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { LocalStrategy } from './utils/LocalStrategy';
import { SessionSerializer } from './utils/SessionSerializer';

@Module({
  // typeOrm:we do that here cause there's already a dependency on UsersService (the repo one)
  imports:[TypeOrmModule.forFeature([UserSchema]),],
  controllers: [ AuthController],
  providers: [
    {
    provide:'AUTH_SERVICE',
    useClass: AuthService,
    },
    {
      provide:'USER_SERVICE',
      useClass: UsersService,
    },
    LocalStrategy,
    SessionSerializer,
   
]
})
export class AuthModule {}
