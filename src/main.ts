import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // app.setGlobalPrefix('api');//prefixes all the routes with api (apprently useful when using nginx)
 app.use(session({
  name:"nestSess", //u canname ur session
  secret:'HFHFHPLKQMDZAOIPUFCBOUZOUQEIOUMCIO' ,// responsible for how the session cookie is going to bes encrypted
  resave: false,
  saveUninitialized:false,  //we dont register sessions that r not initialized
  cookie:{
    maxAge: 60000, //in ms
    secure:false, // our website isn't https
  }
 }))

 app.use(passport.initialize());
 app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
