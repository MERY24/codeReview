import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserSchema{
    @PrimaryGeneratedColumn(
      {
        type:'bigint',
        name:'user_id'
    }
    )
    id:number;

    @Column({
        
    })
    username:string;

    @Column({
        unique:true,
        nullable:false,
       // default:'hey@gmail.com'
    })
    email:string;

    @Column({
        
        nullable:false
    })
    password:string;
}