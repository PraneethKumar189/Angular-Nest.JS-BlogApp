import {Entity,Column,PrimaryGeneratedColumn, OneToOne} from 'typeorm'
import { Profile } from 'src/profile/entites/profile.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id:number;
   
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string; // Date of birth as password (hashed)
  
     @OneToOne(()=>Profile,(profile)=>profile.email)
     profile:Profile[]
}
