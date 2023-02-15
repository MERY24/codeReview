import * as bcrypt from 'bcrypt';



 export function encodePassword(password:string){
  const SALT= bcrypt.genSaltSync();//generates a salt for hash synchronously
  return bcrypt.hashSync(password,SALT);
 }

 export function comparePassword(password:string,pswHash:string){
    return bcrypt.compareSync(password,pswHash);
 }